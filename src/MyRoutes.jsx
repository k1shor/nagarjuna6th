import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First from './First'
import Second from './second'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Login2 from './pages/Login2'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Counter from './hooks/Counter'
import DisplayPersons from './hooks/DisplayPersons'
import AdminLayout from './Layout/admin/AdminLayout'
import Dashboard from './Layout/admin/Dashboard'
import CategoryHome from './pages/admin/Category/CategoryHome'
import TestPage from './pages/TestPage'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/first' element={<First />} />
                    <Route path='/second' element={<Second />} />

                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/login2' element={<Login2 />} />

                    <Route path='/contact' element={<Contact />} />
                    <Route path='/products' element={<Products />} />
                </Route>

                <Route path='/admin' element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='category' element = {<CategoryHome/>}/>
                </Route>

                <Route path='/counter' element={<Counter />} />
                <Route path='/persons' element={<DisplayPersons />} />

                <Route path='/test' element={<TestPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes