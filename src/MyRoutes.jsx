import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First from './First'
import Second from './second'
import Layout from './Layout/Layout'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<First />} />
                    <Route path='/first' element={<First />} />
                    <Route path='/second' element={<Second />} />


                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes