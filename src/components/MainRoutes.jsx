import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AboutUs from '../pages/AboutUs/AboutUs'
import EducationReport from '../pages/EducationReports/EducationReport'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about-us' element={<AboutUs/>} />
            <Route path='/education-report' element={<EducationReport/>} />
        </Routes>
    </div>
  )
}

export default MainRoutes