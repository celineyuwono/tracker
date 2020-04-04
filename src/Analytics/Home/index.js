import React from 'react'

import { Widget, WidgetHeader, WidgetContent, ScrollArea } from '@duik/it'

import { Chart, WidgetChartSummary } from '@components'
import { SelectYear, SelectMonth } from '@composed'
import { numberFormatZeros } from '@lib'
import { barData, lineBlank } from './data/chartData'
import cls from './analytics-home.module.scss'

import Table from './components/StaticTable'
import MuiTable from './components/MuiTable'

const AnalyticsHome = () => (
  <ScrollArea className={cls['analytics-home']}>
    <div className={cls['analytics-home-traffic']}>
      <MuiTable />
    </div>
  </ScrollArea>
)

export default AnalyticsHome
