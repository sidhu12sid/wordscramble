import Lottie from 'lottie-react'
import React from 'react'
import successJson from '../../assets/animations/success.json'


const Result = ({isTrue}) => {
  return (
    <>
    {isTrue ? (<div className='w-64 h-64'>
    <Lottie animationData={successJson}/>
  </div>) : <></>}
    </>
  )
}

export default Result
