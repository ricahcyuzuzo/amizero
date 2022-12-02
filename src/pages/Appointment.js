import React from 'react'

const Appointment = () => {
  return (
    <div className='w-full h-fit bg-[#f9e9e0] py-5'>
        <div className='w-[90%] md:w-[600px] rounded-xl h-[780px] bg-[#fff] mx-auto'>
            <h1 className='text-[#343434] text-[24px] font-semibold p-5'>Get An Appointment</h1>
            <div className='flex flex-col w-[90%] mx-auto'>
                <label className='text-[#343434] text-[18px] font-normal '>Names</label>
                <input type='text' className='w-[100%] h-[48px] border-[1px] rounded-lg border-[#4D335E] px-5 mt-[8px]' placeholder='eg: John Doe' />
            </div>
            <div className='flex flex-col w-[90%] mx-auto mt-[22px]'>
                <label className='text-[#343434] text-[18px] font-normal'>Email</label>
                <input type='email' className='w-[100%] h-[48px] border-[1px] rounded-lg border-[#4D335E] px-5 mt-[8px]' placeholder='eg: John Doe' />
            </div>
            <div className='flex flex-col w-[90%] mx-auto mt-[22px]'>
                <label className='text-[#343434] text-[18px] font-normal '>Whatsapp Phone Number</label>
                <input type='text' className='w-[100%] h-[48px] border-[1px] rounded-lg border-[#4D335E] px-5 mt-[8px]' placeholder='eg: +250 784 382 983' />
            </div>
            <div className='flex flex-col w-[90%] mx-auto mt-[22px]'>
                <label className='text-[#343434] text-[18px] font-normal '>Desrciption</label>
                <textarea aria-multiline={true} type='text' className='w-[100%] h-[208px] border-[1px] rounded-lg border-[#4D335E] px-5 mt-[8px] py-2' placeholder='Tell us what you have in mind?' />
                <button className='w-full mx-auto h-[48px] bg-[#4D335E] text-[#f9e9e0] rounded-lg mt-[50px]'>Send a Request</button>
            </div>
        </div>
    </div>
  )
}

export default Appointment