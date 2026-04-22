import ReactSelectLib from 'react-select';

// CJS/ESM interop: Vite resolves this client-side, but Node.js SSR gets the module object
const ReactSelect = ((ReactSelectLib as unknown as { default: unknown }).default ?? ReactSelectLib) as typeof ReactSelectLib;

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  instanceId: string;
  placeholder?: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
}

export function Select({ instanceId, placeholder, options, value, onChange }: SelectProps) {
  const selected = options.find((o) => o.value === value) ?? null;

  return (
    <ReactSelect
      instanceId={instanceId}
      placeholder={placeholder}
      options={options}
      value={selected}
      onChange={(option) => onChange(option?.value ?? '')}
      isClearable
      classNamePrefix="react-select"
      styles={{
        control: (base) => ({
          ...base,
          minWidth: '180px',
          fontSize: '0.875rem',
          borderColor: '#d1d5db',
          boxShadow: 'none',
          '&:hover': { borderColor: '#9ca3af' },
        }),
        option: (base) => ({ ...base, fontSize: '0.875rem' }),
      }}
    />
  );
}
