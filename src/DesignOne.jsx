import React from 'react'

function DesignOne() {
  return (
    <>
        <div className='w-fit h-screen grid-cols-12 sm:grid hidden'>
            <div className='col-span-5 bg-[#ffa892] flex flex-col justify-center items-center'>
                <h1 className='text-4xl mb-3 font-extrabold font-custom_2'>Discover the world's top<br />Designer & Creatives.</h1>
                <img src="./Images/bg3.png" width={400} height={400} alt="" srcset=""/>
            </div>
            <div className='col-span-7 flex flex-col items-center pt-5 grid-rows-12'>
                <div className='row-span-2 w-full flex justify-end pr-3'>
                    <p className='text-sm font-normal'>Already a member? <a href='#' className='text-blue-600'>Sign in</a></p>
                </div>
                <div className='row-span-10 w-full h-full pl-44 pt-6 pr-48 flex flex-col'>
                    <div className='mb-14'>
                        <span className='text-3xl font-semibold'>Sign up to Nippple</span>
                    </div>
                    <div className='mb-6 grid grid-cols-12 gap-5'>
                        <div className='col-span-6 flex flex-col'>
                            <span className='font-medium mb-1'>Name</span>
                            <input type="text" className='bg-gray-100 rounded-lg h-8 p-3 outline-none text-base' placeholder="Aniket Chaudhary"/>
                        </div>
                        <div className='col-span-6 flex flex-col'>
                            <span className='font-medium mb-1'>Username</span>
                            <input type="text" className='bg-gray-100 rounded-lg h-8 p-3 pr-2 outline-none text-base' placeholder="iamani"/>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <div className='flex flex-col'>
                            <span className='font-medium mb-1'>Email</span>
                            <input type="text" className='bg-gray-100 rounded-lg h-8 p-3 outline-none text-base' placeholder='account@gmail.com'/>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <div className='flex flex-col'>
                            <span className='font-medium mb-1'>Password</span>
                            <input type="text" className='bg-gray-100 rounded-lg h-8 p-3 outline-none text-base' placeholder="6+ characters"/>
                        </div>
                    </div>
                    <div class="flex items-center mb-4">
                        <div className='h-full pt-0.5 flex items-start'>
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                        </div>
                        <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-400">Creating an account means you're ok with our <span className='text-blue-700'>Terms of Services, Privacy Policy,</span> and our default <span className='text-blue-700'>Notification Settings.</span></label>
                    </div>
                    <div>
                        <button type="button" className="text-white bg-[#FE6843] hover:bg-[#f7542c] font-medium rounded-lg text-sm px-5 py-2.5 mt-2 me-2 mb-6 focus:outline-none ">Create Account</button>
                        <p className='text-xs text-gray-400'>The site is protected by reCAPTCHA and the Google</p>
                        <p className='text-xs text-gray-400'><a href="#" className='text-blue-700'>Privacy Policy</a> and <a href="#" className='text-blue-700'>Terms of Service</a></p>
                    </div>    
                </div>
            </div>
        </div>
        <div className='w-screen h-screen grid grid-rows-12 sm:hidden mt-3'>
            <div className='row-span-1 flex justify-end pr-3'>
                <p className='text-sm font-normal'>Already a member? <a href='#' className='text-blue-600'>Sign in</a></p>
            </div>
            <div className='row-span-11 w-full flex flex-col pl-6 pr-6'>
                <div className='mb-14'>
                    <span className='text-3xl font-semibold'>Sign up to Nippple</span>
                </div>
                <div className='mb-5 grid grid-rows-12 gap-3.5'>
                    <div className='row-span-6 flex flex-col'>
                        <span className='font-medium mb-1'>Name</span>
                        <input type="text" className='bg-gray-100 rounded-lg h-12 p-3 outline-none text-base' placeholder="Aniket Chaudhary"/>
                    </div>
                    <div className='row-span-6 flex flex-col'>
                        <span className='font-medium mb-1'>Username</span>
                        <input type="text" className='bg-gray-100 rounded-lg h-12 p-3 pr-2 outline-none text-base' placeholder="iamani"/>
                    </div>
                </div>
                <div className='mb-6'>
                    <div className='flex flex-col'>
                        <span className='font-medium mb-1'>Email</span>
                        <input type="text" className='bg-gray-100 rounded-lg h-12 p-3 outline-none text-base' placeholder='account@gmail.com'/>
                    </div>
                </div>
                <div className='mb-6'>
                    <div className='flex flex-col'>
                        <span className='font-medium mb-1'>Password</span>
                        <input type="text" className='bg-gray-100 rounded-lg h-12 p-3 outline-none text-base' placeholder="6+ characters"/>
                    </div>
                </div>
                <div class="flex items-center mb-4">
                    <div className='h-full pt-0.5 flex items-start'>
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                    </div>
                    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-400">Creating an account means you're ok with our <span className='text-blue-700'>Terms of Services, Privacy Policy,</span> and our default <span className='text-blue-700'>Notification Settings.</span></label>
                </div>
                <button type="button" className="text-white bg-[#FE6843] hover:bg-[#f7542c] font-medium rounded-lg text-sm px-5 py-2.5 mt-2 mb-6 focus:outline-none ">Create Account</button>
                <p className='text-xs text-gray-400'>The site is protected by reCAPTCHA and the Google</p>
                <p className='text-xs text-gray-400 mb-6'><a href="#" className='text-blue-700 mb-3'>Privacy Policy</a> and <a href="#" className='text-blue-700'>Terms of Service</a></p>
            </div>
        </div>
    </>
  )
}

export default DesignOne