import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux'

const Overview = () => {
    const { user } = useSelector(store => store.user);
    return (
        <div className='bg-[#003F3A] h-screen pt-20'>
            <h2 className='text-5xl text-white text-center font-light'>Welcome, <span className='text-[#08cdbd] italic'>{user?.name}</span></h2>
            
            <div className='grid grid-cols-2 gap-2'>

            </div>
        </div>
    )
}

export default Overview
