import React from 'react'
import './Styles/App.css'
import Error from './Components/Error'
import { Routes, Route } from 'react-router'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import EditData from './Components/EditData'
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit/1' element={<EditData />} />
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
