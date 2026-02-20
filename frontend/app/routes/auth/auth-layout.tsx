import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
    return (
        <div className='w-full h-full flex item-center justify-center'>
            <Outlet />
        </div>
    )
}

export default AuthLayout;