import React from 'react'

import { Widget, WidgetHeader, WidgetContent, ScrollArea } from '@duik/it'

import { Chart, WidgetChartSummary } from '@components'
import { SelectYear, SelectMonth } from '@composed'
import { numberFormatZeros } from '@lib'

import ReactDOM from 'react-dom'

class UnderConstruction extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <h3 style={{ margin: '10px' }}>
        The page you are looking for is currently under construction.
      </h3>
    )
  }
}

export default UnderConstruction
