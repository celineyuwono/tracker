import React from 'react';

import { Select } from '@duik/it';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const options = months.map(item => ({
  label: item,
  value: item
}));

export const SelectMonth = props => {
  const [value, setValue] = React.useState(null);
  const handleOptionSelect = option => setValue(option);

  return (
    <Select
      activeOption={value}
      options={options}
      onOptionClick={handleOptionSelect}
      placeholder="Select Month"
      position="bottomRight"
      {...props}
    />
  );
};
