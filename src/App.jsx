import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import { Link } from 'react-router'

// import SecondPage from './components/SecondPage'
import Single from './components/SecondPage'
function App() {
 

  return (
    <>

    {/* <h1 className='text-3xl bg-black text-white hover:text-black hover:bg-white' >hello tailwindcss?</h1> */}
    <Header/>
    <Link to={'/user-profile'}>User profile</Link>
    
    {/* <Cards/> */}
    
      </>
  )
}

export default App
