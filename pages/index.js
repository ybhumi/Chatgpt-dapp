import React, {useState, useEffect} from 'react'
import { useStateContext } from '../Context/index'


const index = () => {

  //state management
  const {DAPP_NAME, listMembership} = useStateContext();

  return (
    <div className='icon-custom'>
    <p>{DAPP_NAME}</p>
    <button onClick={() => listMembership}>LIST MEMBERSHIP</button>
    </div>
  )
}

export default index