import React from 'react'

export default function LoadingStep() {
  return (
    <div className='text-center h-96 flex justify-items-center items-center relative'>
      <div>
        <img className='image' src='/assets/icons/loading.svg' alt="Premium Plus" />
      </div>
      <div>
        <p>Thank you for your loyalty </p>
        <p>We’re pre-loading your personal Info</p>
      </div>
    </div>
  )
}
