import React from 'react'
import ImageCard from './ImageCard'

function DesignThree() {
  return (
    <>
      <div className='w-fit h-fit flex justify-center items-center sm:mt-10 mt-10'>
        <div className='sm:w-[80%] h-[80%] flex flex-col items-center w-[90%]'>
          <h1 className='sm:text-5xl text-4xl font-semibold'>What brings you to Nippple?</h1>
          <p className='mt-5 text-gray-600'>Select the options that best describe you. Don't worry, you can explore other options later.</p>
          <div className='sm:grid grid-cols-12 gap-10 sm:mt-16'>
            <div className='col-span-4'><ImageCard image={"./images/designer.png"} text={"I am a designer looking to share my work"} desc={"Nippple offers a vibrant community and an ideal space to display and discuss design work."}/></div>
            <div className='col-span-4'><ImageCard image={"./images/bg3.png"} text={"I am looking to hire a designer"} desc={"Explore Nippple to discover top talent and bring fresh creativity on board."}/></div>
            <div className='col-span-4'><ImageCard image={"./images/interior_office.jpg"} text={"I am looking for design inspiration"} desc={"With over 7 million shots from a vast community of designers, Nippple is the leading source for design inspiration."}/></div>
          </div>
          <div className='text-lg font-semibold'>Anything else? You can select multiple</div>
          <button type="button" className="text-white bg-[#FE6843] hover:bg-[#f7542c] font-medium rounded-lg text-sm px-5 py-2.5 mt-7 sm:w-[26%] w-[40%]">Finish</button>
          <p className='text-sm mt-3 m-8 text-gray-400'>Or Press RETURN</p>
        </div>
      </div>
    </>
  )
}

export default DesignThree