import React from 'react'
import cls from '../analytics-home.module.scss'
import MuiTable from '../../templates/errors'
import { ScrollArea } from '@duik/it'
import { getProdInstagramUsers } from '@utils'
import { processInstagramProfileErrors } from '@utils'
import { UiContext } from '@context'

class InstagramProfileErrors extends React.Component {
  static contextType = UiContext

  componentDidMount() {
    if (
      this.context.prodIgUsersProfErr.length < 1 ||
      this.context.updateUrl === '/prod/instagram/profile/errors'
    ) {
      getProdInstagramUsers()
        .then((res) => {
          return processInstagramProfileErrors(res)
        })
        .then((data) => {
          this.context.setProdIgUsersProfErr(data)
          this.context.setUpdateUrl('')
        })
    }
  }

  render() {
    return (
      <ScrollArea className={cls['analytics-home']}>
        <MuiTable
          data={this.context.prodIgUsersProfErr}
          title={'Instagram Profile Errors'}
        />
      </ScrollArea>
    )
  }
}

export default InstagramProfileErrors
