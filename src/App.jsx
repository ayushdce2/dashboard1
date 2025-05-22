import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftMain from './components/LeftMain'
import RightMain from './components/RightMain'


function App() {
const[mobileMenu,setMobileMenu]=useState(false);
let RightPropsList = 
    {
      mobileMenu, setMobileMenu
    }
  return (
    <>
      <div className='hrmsMain'>
      <LeftMain mobileMenu={mobileMenu}/>
      <RightMain RightPropsList={RightPropsList}/>
      </div>
    </>
  )
}

export default App
