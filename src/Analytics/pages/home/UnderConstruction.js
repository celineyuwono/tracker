import React from 'react'
import * as images from '@assets'
import { Link } from 'react-router-dom'
import cls from '../analytics-home.module.scss'

class UnderConstruction extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center', margin: '40px' }}>
        <h1>Trackerへようこそ。</h1>
        <img src={images.pompom} style={{ display: 'inline-block' }} />
        <h2>
          <b>このページはただいま準備中です。</b>
        </h2>
        <h2>現在アクセス可能なページ</h2>
        <div className={cls['analytics-links']}>
          <h2 style={{ color: 'black', margin: '7px' }}>PRODUCTION</h2>

          <Link to="/prod/instagram/batch">Instagram Batch</Link>
          <Link to="/prod/instagram/batch/errors">Instagram Batch Errors</Link>
          <Link to="/prod/instagram/profile">Instagram Profile</Link>
          <Link to="/prod/instagram/profile/errors">
            Instagram Profile Errors
          </Link>
        </div>
        <div className={cls['analytics-links']} style={{ marginTop: '20px' }}>
          <h2>STAGING</h2>
          <Link to="/stg/instagram/batch">Instagram Batch</Link>
          <Link to="/stg/instagram/batch/errors">Instagram Batch Errors</Link>
          <Link to="/stg/instagram/profile">Instagram Profile</Link>
          <Link to="/stg/instagram/profile/errors">
            Instagram Profile Errors
          </Link>
        </div>
      </div>
    )
  }
}

export default UnderConstruction
