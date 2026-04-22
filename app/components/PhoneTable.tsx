import type { Customer } from '~/types/api';
import { Badge } from '~/components/ui/Badge';

export interface PhoneTableProps {
  customers: Customer[];
}

function extractLocalNumber(phone: string): string {
  return phone.replace(/^\(\d+\)\s*/, '');
}

export function PhoneTable({ customers }: PhoneTableProps) {
  if (customers.length === 0) {
    return (
      <p className="py-8 text-center text-gray-500 text-sm">No phone numbers found.</p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left px-4 py-2 font-medium text-gray-600">Country</th>
            <th className="text-left px-4 py-2 font-medium text-gray-600">State</th>
            <th className="text-left px-4 py-2 font-medium text-gray-600">Country code</th>
            <th className="text-left px-4 py-2 font-medium text-gray-600">Phone num.</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-4 py-3">{customer.country}</td>
              <td className="px-4 py-3">
                <Badge valid={customer.state === 'valid'} />
              </td>
              <td className="px-4 py-3 text-gray-600">+{customer.country_code}</td>
              <td className="px-4 py-3 font-mono">{extractLocalNumber(customer.phone)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
