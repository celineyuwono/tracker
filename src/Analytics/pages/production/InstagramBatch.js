import React from 'react'
import cls from '../analytics-home.module.scss'
import MuiTable from '../../templates/batch'
import { ScrollArea } from '@duik/it'
import { getProdInstagramUsers } from '@utils'
import { processInstagramBatch } from '@utils'
import { UiContext } from '@context'

class InstagramBatch extends React.Component {
  static contextType = UiContext

  async componentDidMount() {
    if (
      this.context.prodIgUsersBatch.length < 1 ||
      this.context.updateUrl === '/prod/instagram/batch'
    ) {
      try {
        const users = await getProdInstagramUsers()
        const data = await processInstagramBatch(users)
        this.context.setProdIgUsersBatch(data)
        this.context.setUpdateUrl('')
      } catch {
        this.context.setUpdateUrl('')
      }
    }
  }

  render() {
    return (
      <ScrollArea className={cls['analytics-home']}>
        <MuiTable data={this.context.prodIgUsersBatch} />
      </ScrollArea>
    )
  }
}

export default InstagramBatch
