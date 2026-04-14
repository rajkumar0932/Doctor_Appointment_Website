import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/contact'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'

const App = () => {
  return (
   <div className="mx-4 sm:mx-[10%]">
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Doctors' element={<Doctors/>}/>
      <Route path='/Doctors/:Speciality' element={<Doctors/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/my-profile' element={<MyProfile/>}/>
      <Route path='/my-appointments' element={<MyAppointments/>}/>
       <Route path='/Appointment/:docId' element={<Appointment/>}/>
     </Routes>
    </div>
  )
}

export default App
