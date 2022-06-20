import { Select } from 'antd';

interface IOption {
  value: string;
  label: string;
}

interface ISelect {
  placeholder?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  isSearchable?: boolean;
  options: IOption[];
  hasError?: boolean | string;
  onSelect: (value: string | number) => void;
  onChange: (value: string) => void;
  onBlur: (e: React.FocusEvent<any, Element>) => void;
}
const { Option } = Select;

export const SelectField: React.FC<ISelect> = ({
  placeholder,
  required = true,
  options,
  onSelect,
  onBlur,
  onChange,
  isSearchable,
  hasError,
}) => {
  return (
    <div className={`select-field-container ${hasError ? 'fa_selectfield__error' : ''}`}>
      <Select
        placeholder={
          <span className='select-placeholder'>
            {placeholder} {required && <span className='font-danger'>*</span>}
          </span>
        }
        showSearch={isSearchable}
        style={{ width: '100%' }}
        className={`fa_selectfield`}
        onSelect={onSelect}
        onChange={onChange}
        onBlur={onBlur}
        filterOption={(input, option) =>
          (option!.children as unknown as string).includes(input)
        }
        filterSort={(optionA, optionB) =>
          (optionA!.children as unknown as string)
            .toLowerCase()
            .localeCompare((optionB!.children as unknown as string).toLowerCase())
        }>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};
