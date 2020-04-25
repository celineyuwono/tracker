import moment from 'moment'

export const processInstagramBatch = (res) => {
  let programId = new Set()
  const programName = []
  const successRate = []
  const lastInvoked = []
  res.forEach((user) => {
    if (user.program_id) {
      programId.add(user.program_id)
    }
  })
  programId = Array.from(programId).sort((a, b) => {
    return a - b
  })

  const { length } = programId
  const igUsers = new Array(length).fill(0)
  const updateSucceeded = new Array(length).fill(0)
  const updateFailed = new Array(length).fill(0)
  res.forEach((user) => {
    const idx = programId.indexOf(user.program_id)
    if (!programName[idx]) {
      programName[idx] = user.program_name
    }
    igUsers[idx]++
    if (user.crawl_error_code) {
      updateSucceeded[idx]++
    } else {
      updateFailed[idx]++
    }
    successRate[idx] = ((igUsers[idx] - updateFailed[idx]) / igUsers[idx]) * 100

    if (
      user.performances_last_updated &&
      (!lastInvoked[idx] ||
        moment(user.performances_last_updated) > lastInvoked[idx])
    ) {
      lastInvoked[idx] = moment(user.performances_last_updated)
    }
  })

  const array = []
  for (let i = 0; i < length; i++) {
    array.push({
      programId: programId[i],
      programName: programName[i],
      igUsers: igUsers[i],
      updateSucceeded: updateSucceeded[i],
      updateFailed: updateFailed[i],
      successRate: successRate[i],
      lastInvoked: lastInvoked[i],
    })
  }

  const data = array.map((data) => {
    return {
      ...data,
      successRate: `${Math.round(data.successRate * 100) / 100}%`,
    }
  })
  return data
}

export const processInstagramBatchErrors = (res) => {
  return res
    .filter((data) => data.crawl_error_code && data.ambassador_id)
    .map((data) => {
      return {
        ambassadorId: data.ambassador_id,
        username: data.username,
        programId: data.program_id,
        programName: data.program_name,
        igUid: data.ig_uid,
        errorCode: data.crawl_error_code,
        errorMessage: data.crawl_error_message,
        lastInvoked: moment(data.modified).format('YYYY-MM-DD HH:mm:ss'),
      }
    })
}

export const processInstagramProfile = (res) => {
  let programId = new Set()
  const programName = []
  const updateRate = []
  const successRate = []
  const lastInvoked = []
  res.forEach((user) => {
    if (user.program_id) {
      programId.add(user.program_id)
    }
  })
  programId = Array.from(programId).sort((a, b) => {
    return a - b
  })

  const { length } = programId
  const igUsers = new Array(length).fill(0)
  const updateCompleted = new Array(length).fill(0)
  const updatePending = new Array(length).fill(0)
  const updateSucceeded = new Array(length).fill(0)
  const updateFailed = new Array(length).fill(0)
  res.forEach((user) => {
    const idx = programId.indexOf(user.program_id)
    if (!programName[idx]) {
      programName[idx] = user.program_name
    }
    igUsers[idx]++
    if (
      user.last_scraped &&
      moment(user.last_scraped).isAfter(moment().startOf('month')) &&
      !user.scrape_error_code
    ) {
      updateSucceeded[idx]++
      updateCompleted[idx]++
    } else if (
      user.last_scraped &&
      moment(user.last_scraped).isAfter(moment().startOf('month')) &&
      user.scrape_error_code
    ) {
      updateFailed[idx]++
      updateCompleted[idx]++
    } else if (
      !user.last_scraped ||
      moment(user.last_scraped).isBefore(moment().startOf('month'))
    ) {
      updatePending[idx]++
    }

    updateRate[idx] = (updateCompleted[idx] / igUsers[idx]) * 100
    if (updateCompleted[idx] > 0) {
      successRate[idx] = (updateSucceeded[idx] / updateCompleted[idx]) * 100
    } else {
      successRate[idx] = 0
    }

    if (
      user.last_scraped &&
      (!lastInvoked[idx] || moment(user.last_scraped).isAfter(lastInvoked[idx]))
    ) {
      lastInvoked[idx] = moment(user.last_scraped)
    }
  })

  const array = []
  for (let i = 0; i < length; i++) {
    array.push({
      programId: programId[i],
      programName: programName[i],
      igUsers: igUsers[i],
      updateSucceeded: updateSucceeded[i],
      updateFailed: updateFailed[i],
      updateCompleted: updateCompleted[i],
      updatePending: updatePending[i],
      updateRate: updateRate[i],
      successRate: successRate[i],
      lastInvoked: lastInvoked[i],
    })
  }

  const data = array.map((data) => {
    return {
      ...data,
      updateRate: `${Math.round(data.updateRate * 100) / 100}%`,
      successRate: `${Math.round(data.successRate * 100) / 100}%`,
    }
  })
  return data
}

export const processInstagramProfileErrors = (res) => {
  return res
    .filter((data) => data.scrape_error_code && data.ambassador_id)
    .map((data) => {
      return {
        ambassadorId: data.ambassador_id,
        username: data.username,
        programId: data.program_id,
        programName: data.program_name,
        igUid: data.ig_uid,
        errorCode: data.scrape_error_code,
        errorMessage: data.scrape_error_message,
        lastInvoked: moment(data.last_scraped).format('YYYY-MM-DD HH:mm:ss'),
      }
    })
}
