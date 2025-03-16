import React from 'react'
import Sidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='flex'>
        <div>
            <Sidebar/>
        </div>
        <div>
            <Outlet/>
        </div>
        
    </div>
  )
}

export default AdminLayout