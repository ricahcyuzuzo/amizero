import React from 'react'

const Landing = () => {
  return (
    <div className='w-full text-white flex flex-col-reverse md:flex-row justify-between'>
        <div className='px-6  flex flex-col justify-center py-6'>
            <div className=''>
                <h1 className='text-[#f9e9e0] text-[30px] md:text-[48px] font-extrabold mt-[20px] mx-auto'>KOPERATIVE AMIZERO TABARA.</h1>
                <p className='w-[300px] md:w-[400px] text-[20px] mt-[30px] md:text-[30px]'>Welcome to AMIZERO, we are women with hope and we bring joy to your face throught our products.</p>
                <button className='w-[100%] mt-[40px] md:w-[200px] h-[50px] bg-[#f9e9e0] text-[#4D335E] text-[16px] font-medium rounded-lg'>Take a look</button>
            </div>
        </div>
        <img src={require('./assets/foundation.png')} className='md:w-[800px] md:h-[800px] object-contain' />
    </div>
  )
}

export default Landing