import React from 'react'
import Icon from '@duik/icon'
import { Widget, WidgetHeader, WidgetTable } from '@duik/it'
import { ChartLineOnly } from '@components'

import { lineBlank } from '../../data/chartData'

import cls from './table.module.scss'

const data = [['Instagram Crawler', '4,890', '3,985', 'SUCCESS']]
const Table = () => (
  <Widget>
    <WidgetHeader>
      <h3>Instagram 全投稿収集</h3>
    </WidgetHeader>
    <div className={cls['analytics-card-most-visited-table-wrapper']}>
      <WidgetTable className={cls['analytics-card-most-visited-table']}>
        <thead>
          <tr>
            <th>Function Name</th>
            <th>Program ID</th>
            <th>Last Updated</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={Math.random() /* pls don't do this in prod */}>
              {row.map((cell) => (
                <td key={Math.random()}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </WidgetTable>
    </div>
  </Widget>
)

export default Table
