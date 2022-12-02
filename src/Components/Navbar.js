import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const location = useLocation()
    
    return (
        <>
        <div className='w-full h-[85px] flex items-center md:px-[30px] px-5 justify-between' style={{
            backgroundColor: location.pathname === '/' ? '#f9e9e0' : '#4D335E'
        }}>
            <Link to='/' className='text-[#4D335E] w-[10px] text-[18px] md:text-[24px] font-extrabold leading-7 cursor-pointer' style={{
                    color: location.pathname === '/' ? '#4D335E' : '#f9e9e0'
                }}>AMIZERO TABARA</Link>
            <div className='hidden md:flex flex-row gap-5'>
                <Link to='/' className='text-[#4D335E] text-[16px] font-medium' style={{
                    color: location.pathname === '/' ? '#4D335E' : '#f9e9e0'
                }}>Home</Link>
                <Link to='/products' className='text-[#4D335E] text-[16px] font-medium' style={{
                    color: location.pathname === '/' ? '#4D335E' : '#f9e9e0'
                }}>Products</Link>
                <Link to='/appointment' className='text-[#4D335E] text-[16px] font-medium' style={{
                    color: location.pathname === '/' ? '#4D335E' : '#f9e9e0'
                }}>Appointment</Link>
            </div>
            <div className='block md:hidden'>
                <Icon icon={ openNav ? 'material-symbols:close-rounded' : 'tabler:menu'} onClick={() => setOpenNav(!openNav)} fontSize={30} color={location.pathname === '/' ? '#4D335E' : '#f9e9e0'} />
            </div>
        </div>
       {
        openNav ?
         <div className='md:hidden w-full h-[200px] bg-[#f9e9e0] gap-5 flex flex-col py-[20px] '>
            <Link onClick={() => setOpenNav(false)} to='/' className='text-[#f9e9e0] text-[18px] bg-[#4D335E] w-[250px] flex items-center pl-[20px] h-[50px] mx-5 rounded-lg  font-medium'>Home</Link>
            <Link onClick={() => setOpenNav(false)} to='/products' className='text-[#f9e9e0] text-[18px] bg-[#4D335E] w-[250px] flex items-center pl-[20px] h-[50px] mx-5 rounded-lg  font-medium'>Products</Link>
            <Link onClick={() => setOpenNav(false)} to='/appointment' className='text-[#f9e9e0] text-[18px] bg-[#4D335E] w-[250px] flex items-center pl-[20px] h-[50px] mx-5 rounded-lg  font-medium'>Appointment</Link>
        </div> : null
       }
        </>
    )
}

export default Navbar