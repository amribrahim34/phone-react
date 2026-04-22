export interface Customer {
  id: number;
  name: string;
  phone: string;
  country: string;
  country_code: string;
  state: 'valid' | 'invalid';
}

export interface PaginationMeta {
  current_page: number;
  last_page: number;
  total: number;
  per_page: number;
}

export interface PaginatedCustomers {
  data: Customer[];
  meta: PaginationMeta;
  links: { prev: string | null; next: string | null };
}

export interface CustomerQueryParams {
  country?: string;
  state?: string;
  page?: number;
}
