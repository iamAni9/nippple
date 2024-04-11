import React from 'react'

export default function ImageCard({image, text, desc}) {
   
  return (  
    <>
        <div class="sm:w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <div class="flex flex-col items-center pb-10">
                <img className="mb-3 w-fit h-56" src={image} alt="Image Not Available"/>
                <div className='flex flex-col items-center px-8'>
                    <h5 class="mb-1 text-2xl font-bold text-gray-900 dark:text-white text-center">{text}</h5>
                    <span class="text-sm text-center mt-2 text-gray-500 dark:text-gray-400 hidden">Dribbble offers a vibrant community and an ideal space to display and discuss design work.</span>
                    <div class="flex items-center mt-3">
                        <input type="checkbox" value="" class="w-6 h-6" />
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

