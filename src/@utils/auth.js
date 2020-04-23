import axios from 'axios'

const AP_USER = {
  email: 'yuwono@agilemedia.jp',
  password: 'amn',
}

export const getStgToken = async (user) => {
  const token = await axios.post(
    'https://stg-ac-client-api.ambassadors.jp/basic/auth',
    user
  )
  return JSON.parse(token.request.response).data.token
}

export const getProdToken = async (user) => {
  const token = await axios.post(
    'https://ac-client-api.ambassadors.jp/basic/auth',
    user
  )
  return JSON.parse(token.request.response).data.token
}

const getStgInfo = async (url, token) => {
  const res = await axios.get(url, {
    headers: {
      Authorization: token,
      'x-api-key': 'Cfa65VJNXh11klkLOlSoZ11Ec0KvDxdX5RMVEQDo',
    },
  })
  return res.data.data.user_list
}

const getProdInfo = async (url, token) => {
  const res = await axios.get(url, {
    headers: {
      Authorization: token,
      'x-api-key': 'qB1xln6O7X7eXGwnCAROE2b1UCkixrjv7veOTKQV',
    },
  })
  return res.data.data.user_list
}

export const getLogin = () => {}

export const getStgInstagramUsers = async () => {
  const token = await getStgToken(AP_USER)
  return getStgInfo(
    'https://stg-ac-client-api.ambassadors.jp/voice/instagramUsers',
    token
  )
}

export const getProdInstagramUsers = async () => {
  const token = await getProdToken(AP_USER)
  return getProdInfo(
    'https://ac-client-api.ambassadors.jp/voice/instagramUsers',
    token
  )
}
