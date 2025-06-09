import Lottie from 'lottie-react'
import React from 'react'
import successJson from '../../assets/animations/success.json'
import failJson from '../../assets/animations/faliure.json'

const Result = ({isTrue}) => {
  return (
    <>
    {isTrue ? (<div className='w-64 h-64'>
    <Lottie animationData={successJson}/>
  </div>) : (<div className='w-64 h-64'>
    <Lottie animationData={failJson}/>
  </div>)}
    </>
  )
}

export default Result
