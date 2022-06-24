import { Select } from 'antd';
import { ISelect } from 'type.d';

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
        bordered={false}
        filterOption={(input, option: any) => {
          return option!.children?.toLowerCase().includes(input.toLowerCase());
        }}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};
