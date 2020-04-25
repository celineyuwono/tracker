import React from 'react'
import cls from '../analytics-home.module.scss'
import MuiTable from '../../templates/batch'
import { ScrollArea } from '@duik/it'
import { getStgInstagramUsers } from '@utils'
import { processInstagramBatch } from '@utils'
import { UiContext } from '@context'

class InstagramBatch extends React.Component {
  static contextType = UiContext

  componentDidMount() {
    if (
      this.context.stgIgUsersBatch.length < 1 ||
      this.context.updateUrl === '/stg/instagram/batch'
    ) {
      getStgInstagramUsers()
        .then((res) => {
          return processInstagramBatch(res)
        })
        .then((data) => {
          this.context.setStgIgUsersBatch(data)
          this.context.setUpdateUrl('')
        })
    }
  }

  render() {
    return (
      <ScrollArea className={cls['analytics-home']}>
        <MuiTable data={this.context.stgIgUsersBatch} />
      </ScrollArea>
    )
  }
}

export default InstagramBatch
