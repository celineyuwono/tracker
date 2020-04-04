import React from 'react';
import * as images from '@exampleAssets';
import cls from './selectcountry.module.scss';

export default [
  {
    value: 'czech',
    label: (
      <span className={cls['select-option-country-content']}>
        <img
          alt="english"
          className={cls['select-option-flag']}
          src={images.fCzechia}
        />
        Czech Republic
      </span>
    )
  },
  {
    value: 'tuvalu',
    label: (
      <span className={cls['select-option-country-content']}>
        <img
          alt="tuvalu"
          className={cls['select-option-flag']}
          src={images.fTuvalu}
        />
        Tuvalu
      </span>
    )
  },
  {
    value: 'norway',
    label: (
      <span className={cls['select-option-country-content']}>
        <img
          alt="norway"
          className={cls['select-option-flag']}
          src={images.fNorway}
        />
        Norway
      </span>
    )
  }
];
