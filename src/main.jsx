import React from 'react'
import ReactDOM from 'react-dom/client'
import { Nav } from './Nav.jsx'
import './index.css'
import { AboutMe } from './AboutMe.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <AboutMe/>
  </React.StrictMode>,
)
