import React, {useState, useEffect} from 'react'
import { useStateContext } from '../Context/index'


const index = () => {

  //state management
  const {DAPP_NAME} = useStateContext();

  return (
    <div className='icon-custom'>{DAPP_NAME}</div>
  )
}

export default index