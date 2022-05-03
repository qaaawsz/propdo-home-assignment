import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home, routes} from '../global/export'

const AppRouter = () => {
    return (
        <Routes>
            {
                routes.map(({path, Element}) =>
                    <Route key={path} path={path} element={<Element/>}/>)
            }
            <Route path="*" element={<Home/>}/>
        </Routes>
    )
}

export default AppRouter
