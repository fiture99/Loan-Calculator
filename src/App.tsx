import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LoanCalculator from './components/LoanCalculator'
import Logo from './components/Logo'
import Footer from './components/Footer'


function App() {

  return (
    <div className='App'>
      <Logo/>
      <LoanCalculator/>
      <Footer/>
    </div>
  )
}

export default App
