import React from 'react'
import logo from "../inicio/logo_nuevo_fondo_negro.jpg"

const Footer = () => {
  return (
    <div className='footer'>
        <p>©2024 1mPossible | All Rights Reserved</p>
        <img src={logo} alt="" height={"150px"} width={"150px"}/>
        <p className='diseño-footer'><a href="https://francoalberti1997.vercel.app/">Designed by Alberti Code</a></p>
    </div>
  )
}

export default Footer
