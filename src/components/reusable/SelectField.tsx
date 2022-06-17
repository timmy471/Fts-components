import React, { ForwardRefRenderFunction } from 'react';
import Select, {
  ActionMeta,
  MultiValue,
  SingleValue,
  StylesConfig,
  GroupBase,
} from 'react-select';

type OptionType = {
  value: string | number;
  label: string;
};

interface ISelect {
  options: OptionType[];
  onChange?:
    | ((
        newValue: MultiValue<OptionType> | SingleValue<OptionType>,
        actionMeta: ActionMeta<OptionType>
      ) => void)
    | undefined;
  value?: any;
  disabled?: boolean;
  noOptionsMessage?: ((obj: { inputValue: string }) => React.ReactNode) | undefined;
  isSearchable?: boolean;
  name: string;
  isMulti?: boolean;
  state?: 'success' | 'warning' | 'error';
  hasError?: boolean | string;
  placeholder?: string;
  id: string;
}

export const SelectField: ForwardRefRenderFunction<HTMLInputElement, ISelect> = ({
  options,
  onChange,
  disabled = false,
  noOptionsMessage,
  value,
  isSearchable = false,
  name,
  isMulti = false,
  hasError,
  placeholder = '',
  state,
  id,
}) => {
  const customStyles: StylesConfig<OptionType, boolean, GroupBase<OptionType>> | undefined = {
    control: (style: object) => {
      const getBorderState = () => {
        switch (state) {
          case 'success':
            return '1.2px solid #3CAC70';

          case 'warning':
            return '1.2px solid #E2B93B';

          case 'error':
            return '1.px solid #EB5757';

          default:
            return 'none';
        }
      };
      return {
        ...style,
        backgroundColor: disabled ? '#F3F3F3' : '#FFFFFF',
        outline: 'none',
        border: hasError ? '1.2px solid #EB5757' : getBorderState(),
        color: '#4F4F4F',
        fontSize: '14px',
        height: '50px',
        borderRadius: '5px',
        cursor: !disabled ? 'pointer' : 'not-allowed',
        boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.03)',
        fontFamily: 'Museo Sans',
        padding: '0.4rem 0.6rem',
      };
    },
    placeholder: (style: object) => ({ ...style, color: '#4F4F4F', fontFamily: 'Museo Sans' }),
  };

  return (
    <div className='fa_textfield_container'>
      <Select
        defaultValue={value}
        onChange={onChange}
        options={options}
        value={value}
        name={name}
        id={id}
        instanceId={id}
        styles={customStyles}
        isMulti={isMulti}
        isSearchable={isSearchable}
        noOptionsMessage={noOptionsMessage}
        isDisabled={disabled}
        placeholder={placeholder}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </div>
  );
};
