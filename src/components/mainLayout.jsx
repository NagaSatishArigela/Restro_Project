import React from 'react'
import MainDash from './main/main'
import RightSide from './rightside/rightSide'
import '../App.css'

const Layout = () => {
  return (
    <div className='AppGlass'>
        <MainDash/>
        <RightSide/>
    </div>
  )
}

export default Layout