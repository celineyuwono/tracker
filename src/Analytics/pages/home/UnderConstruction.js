import React from 'react'
import * as images from '@assets'
import { Link } from 'react-router-dom'

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
        <div>
          <h2 style={{ color: 'black', margin: '7px' }}>PRODUCTION</h2>
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <Link to="/prod/instagram/batch">Instagram Batch</Link>
            </li>
            <li>
              <Link to="/prod/instagram/batch/errors">
                Instagram Batch Errors
              </Link>
            </li>
            <li>
              <Link to="/prod/instagram/profile">Instagram Profile</Link>
            </li>
            <li>
              <Link to="/prod/instagram/profile/errors">
                Instagram Profile Errors
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 style={{ color: 'black', marginBottom: '7px' }}>STAGING</h2>
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <Link to="/stg/instagram/batch">Instagram Batch</Link>
            </li>
            <li>
              <Link to="/stg/instagram/batch/errors">
                Instagram Batch Errors
              </Link>
            </li>
            <li>
              <Link to="/stg/instagram/profile">Instagram Profile</Link>
            </li>
            <li>
              <Link to="/stg/instagram/profile/errors">
                Instagram Profile Errors
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default UnderConstruction
