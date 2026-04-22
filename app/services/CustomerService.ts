import axios from 'axios';
import type { CustomerQueryParams, PaginatedCustomers } from '~/types/api';

class CustomerService {
  constructor(private readonly baseUrl: string) {}

  async getCustomers(params: CustomerQueryParams): Promise<PaginatedCustomers> {
    const { data } = await axios.get<PaginatedCustomers>(
      `${this.baseUrl}/api/customers`,
      { params: this.buildParams(params) }
    );
    return data;
  }

  private buildParams(params: CustomerQueryParams): Record<string, string | number> {
    const result: Record<string, string | number> = {};
    if (params.country) result.country = params.country;
    if (params.state)   result.state   = params.state;
    if (params.page)    result.page    = params.page;
    return result;
  }
}

export const customerService = new CustomerService(
  process.env['API_URL'] ?? 'http://127.0.0.1:8000'
);
