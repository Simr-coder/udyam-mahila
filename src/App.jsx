import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import Connect from './Components/Connect'
import TitlePage from './Components/TitlePage'
import CollaborationPage from './Components/CollaborationPage'
import IdeasPage from './Components/IdeasPage'
import Mentorship from './Components/Mentorship'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
 <Header/>
<Outlet/>
 </>
  )
}

export default App
