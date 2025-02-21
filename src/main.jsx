import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from "react-router"
import UserProfile from './components/UserProfile.jsx'
import Single from './components/SecondPage.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/user-profile' element={<UserProfile/>}/>
      <Route path='/:id' element={<Single/>}/>
    </Routes>
  </BrowserRouter>
)
