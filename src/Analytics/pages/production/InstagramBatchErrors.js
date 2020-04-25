import React from 'react'
import MuiTable from '../../templates/errors'
import cls from '../analytics-home.module.scss'
import { ScrollArea } from '@duik/it'
import { getProdInstagramUsers } from '@utils'
import { processInstagramBatchErrors } from '@utils'
import { UiContext } from '@context'

class InstagramBatchErrors extends React.Component {
  static contextType = UiContext

  componentDidMount() {
    if (this.context.prodIgUsersBatchErr.length < 1) {
      getProdInstagramUsers()
        .then((res) => {
          return processInstagramBatchErrors(res)
        })
        .then((data) => {
          this.context.setProdIgUsersBatchErr(data)
        })
    }
  }

  render() {
    return (
      <ScrollArea className={cls['analytics-home']}>
        <MuiTable
          data={this.context.prodIgUsersBatchErr}
          title={'Instagram Batch Errors'}
        />
      </ScrollArea>
    )
  }
}

export default InstagramBatchErrors
