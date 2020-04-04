import React from 'react';
import { Select } from '@duik/it';
import optionsCountries from './optionsCountries';

export const SelectCountry = props => {
  const [value, setValue] = React.useState(optionsCountries[0]);
  const handleOptionSelect = option => setValue(option);
  return (
    <Select
      activeOption={value}
      options={optionsCountries}
      onOptionClick={handleOptionSelect}
      placeholder="Action"
      position="bottomRight"
      {...props}
    />
  );
};
