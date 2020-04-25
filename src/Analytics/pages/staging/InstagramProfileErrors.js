import React from 'react'
import cls from '../analytics-home.module.scss'
import MuiTable from '../../templates/errors'
import { ScrollArea } from '@duik/it'
import { getStgInstagramUsers } from '@utils'
import { processInstagramProfileErrors } from '@utils'
import { UiContext } from '@context'

class InstagramProfileErrors extends React.Component {
  static contextType = UiContext

  componentDidMount() {
    if (this.context.stgIgUsersProfErr.length < 1) {
      getStgInstagramUsers()
        .then((res) => {
          return processInstagramProfileErrors(res)
        })
        .then((data) => {
          this.context.setStgIgUsersProfErr(data)
        })
    }
  }

  render() {
    return (
      <ScrollArea className={cls['analytics-home']}>
        <MuiTable
          data={this.context.stgIgUsersProfErr}
          title={'Instagram Profile Errors'}
        />
      </ScrollArea>
    )
  }
}

export default InstagramProfileErrors
