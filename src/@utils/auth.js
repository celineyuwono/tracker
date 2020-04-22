import axios from 'axios'

const AP_USER = {
  email: 'yuwono@agilemedia.jp',
  password: 'amn',
}

const getStgInfo = async (url) => {
  let token = await axios.post(
    'https://stg-ac-client-api.ambassadors.jp/basic/auth',
    AP_USER
  )
  token = JSON.parse(token.request.response).data.token
  const res = await axios.get(url, {
    headers: {
      Authorization: token,
      'x-api-key': 'Cfa65VJNXh11klkLOlSoZ11Ec0KvDxdX5RMVEQDo',
    },
  })
  return res.data.data.user_list
}

const getProdInfo = async (url) => {
  let token = await axios.post(
    'https://ac-client-api.ambassadors.jp/basic/auth',
    AP_USER
  )
  token = JSON.parse(token.request.response).data.token
  const res = await axios.get(url, {
    headers: {
      Authorization: token,
      'x-api-key': 'qB1xln6O7X7eXGwnCAROE2b1UCkixrjv7veOTKQV',
    },
  })
  return res.data.data.user_list
}

export const getStgInstagramUsers = () => {
  return getStgInfo(
    'https://stg-ac-client-api.ambassadors.jp/voice/instagramUsers'
  )
}

export const getProdInstagramUsers = () => {
  return getProdInfo(
    'https://ac-client-api.ambassadors.jp/voice/instagramUsers'
  )
}
