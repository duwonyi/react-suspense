import React from 'react'

function suspensify(promise) {
  let status = 'pending'
  let result
  let suspender = promise.then(
    response => {
      status = 'success'
      result = response
    },
    error => {
      status = 'error'
      result = error
    },
  )

  return {
    read() {
      // pending
      if (status === 'pending') throw suspender
      // rejected
      if (status === 'error') throw result
      // resolved
      if (status === 'success') return result
      // if (status === 'success') return { name: 'Fake profile'}
    }
  }
}

let profile = suspensify(
  fetch('http://localhost:3004/profile').then(res => res.json()),
)

function Detail() {
  // return <div>Static - Profile</div>
  return <div>{profile.read().name}</div>
}

export default Detail
