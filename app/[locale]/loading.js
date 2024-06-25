export default function Loading() {
  return (
    <div className='text-center h-dvh flex justify-items-center items-center relative pt-40'>
      <div>
        <img
          className='image'
          src='/assets/icons/loading.svg'
          alt='Premium Plus'
        />
      </div>
      <div className='absolute inset-x-11'>
        <p>Establishing secure connection. </p>
      </div>
    </div>
  )
}
