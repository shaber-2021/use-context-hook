import React from 'react'
import ComponentOne from './ComponentOne'
import { UserContext } from './UserContext'

const Component = () => {
  return (
    <UserContext.Provider value={'i am a webdeveloper'}>
      <ComponentOne/>
    </UserContext.Provider>
  )
}

export default Component