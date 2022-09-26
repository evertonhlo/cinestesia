import React from 'react'

//Componentes


import Navbar from '../Navbar'
import Footer from '../Footer'



import './style.css'


const Main = (props) => {
  return (


<div className='divizona' >
        <Navbar />
      
        <div className='container-layout'>
        {props.children}
      
        </div>
       
         <Footer /> 
</div>
  )
}

export default Main