import React from 'react'

function DesignTwo() {
  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center sm:mt-5'>
        <div className='sm:w-[60%] h-[80%] flex flex-col items-start w-[90%]'>
          <h1 className='sm:text-5xl text-4xl font-semibold'>Welcome! Let's create your profile</h1>
          <p className='mt-4 text-gray-600'>Let other get to know you better! You can do these later</p>
          <div className='text-lg font-bold mt-8'>Add an avatar</div>
          <div className='flex justify-between items-center mt-5 gap-3'>
            <div>
            <img class="sm:h-40 sm:w-40 h-24 w-32 object-cover rounded-full cursor-pointer" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
            </div>
            <div className='flex flex-col justify-start gap-2 pl-10'>
              <span className='border-[1px] sm:w-[60%] border-gray-400 rounded-lg py-2 cursor-pointer font-semibold text-center select-none'>Choose Image</span>
              <p className='text-gray-400 font-semibold cursor-pointer'>&gt; Or choose one of our defaults</p>
            </div>
          </div>
          <div className='text-lg font-bold mt-14'>Add your location</div>
          <div className='w-[70%] h-8 border-b-2 mt-4 text-base font-medium'>San Francisco</div>
          <div className='flex items-center w-full gap-3 mt-16'>
            <button type="button" className="text-white bg-[#FE6843] hover:bg-[#f7542c] font-medium rounded-lg text-sm px-5 py-2.5 sm:w-[26%] w-[40%]">Next</button>
            <p className='text-sm text-gray-400'>Or Press RETURN</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DesignTwo