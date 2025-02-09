import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First from './First'
import Second from './second'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<First />} />
                <Route path='/first' element={<First />} />
                <Route path='/second' element={<Second />} />
                {/* <Route path='/' element={<Second />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes