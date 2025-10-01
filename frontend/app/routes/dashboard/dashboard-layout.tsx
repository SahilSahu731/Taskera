import React from 'react'
import DashboardPage from './index'
import { useAuth } from '@/provider/auth-context'

const DashboardLayout = () => {

    const { user, logout } = useAuth()

  return (
    <div>
      <>
        <DashboardPage />
        <button onClick={logout} className='p-2 bg-red-500 text-white rounded-md mt-4'>Logout {user?.email}</button>
      </>
    </div>
  )
}

export default DashboardLayout 
