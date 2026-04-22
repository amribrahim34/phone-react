import type { Route } from './+types/home';
import { useLoaderData, useNavigate } from 'react-router';
import { customerService } from '~/services/CustomerService';
import { PhoneFilters } from '~/components/PhoneFilters';
import { PhoneTable } from '~/components/PhoneTable';
import { Pagination } from '~/components/ui/Pagination';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Phone numbers' }];
}

export async function loader({ request }: Route.LoaderArgs) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country') ?? '';
  const state   = searchParams.get('state')   ?? '';
  const page    = Math.max(1, parseInt(searchParams.get('page') ?? '1', 10));

  const result = await customerService.getCustomers({ country, state, page });
  return { ...result, countryFilter: country, stateFilter: state };
}

export default function Home() {
  const { data, meta, countryFilter, stateFilter } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set('page', String(page));
    navigate(`/?${params.toString()}`);
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-light mb-8 text-gray-900">Phone numbers</h1>
      <PhoneFilters currentCountry={countryFilter} currentState={stateFilter} />
      <PhoneTable customers={data} />
      <Pagination
        currentPage={meta.current_page}
        totalPages={meta.last_page}
        onPageChange={handlePageChange}
      />
    </main>
  );
}
