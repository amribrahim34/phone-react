import { useNavigate } from 'react-router';
import { Select } from '~/components/ui/Select';

const COUNTRIES = [
  { value: 'Cameroon',   label: 'Cameroon'   },
  { value: 'Ethiopia',   label: 'Ethiopia'   },
  { value: 'Morocco',    label: 'Morocco'    },
  { value: 'Mozambique', label: 'Mozambique' },
  { value: 'Uganda',     label: 'Uganda'     },
];

const STATES = [
  { value: 'valid',   label: 'Valid'   },
  { value: 'invalid', label: 'Invalid' },
];

export interface PhoneFiltersProps {
  currentCountry: string;
  currentState: string;
}

export function PhoneFilters({ currentCountry, currentState }: PhoneFiltersProps) {
  const navigate = useNavigate();

  const handleChange = (country: string, state: string) => {
    const params = new URLSearchParams();
    if (country) params.set('country', country);
    if (state)   params.set('state', state);
    navigate(`/?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-3 mb-6">
      <Select
        instanceId="country-filter"
        placeholder="Select country"
        options={COUNTRIES}
        value={currentCountry}
        onChange={(value) => handleChange(value, currentState)}
      />
      <Select
        instanceId="state-filter"
        placeholder="All states"
        options={STATES}
        value={currentState}
        onChange={(value) => handleChange(currentCountry, value)}
      />
    </div>
  );
}
