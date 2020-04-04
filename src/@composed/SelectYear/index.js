import React from 'react';

import { Select } from '@duik/it';

const options = [
  {
    label: 2019,
    value: 2019
  },
  {
    label: 2018,
    value: 2018
  },
  {
    label: 2017,
    value: 2017
  },
  {
    label: 2016,
    value: 2016
  },
  {
    label: 2015,
    value: 2015
  }
];

export const SelectYear = props => {
  const [value, setValue] = React.useState(options[0]);
  const handleOptionSelect = option => setValue(option);

  return (
    <Select
      activeOption={value}
      options={options}
      onOptionClick={handleOptionSelect}
      placeholder="Select Year"
      position="bottomRight"
      {...props}
    />
  );
};
