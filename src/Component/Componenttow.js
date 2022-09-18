import React, {useContext } from 'react'
import {UserContext} from './UserContext'

const Componenttow = () => {
    const data = useContext(UserContext)
  return (
    <div>
        <h1>hello i am  Component tow {data} </h1>
    </div>
  )
}

export default Componenttow