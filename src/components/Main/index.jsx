import React from 'react'

//Componentes


import Navbar from '../Navbar'
import Footer from '../Footer'
// import Principal from './components/Principal'






const Main = (props) => {
  return (


<div className='container-layout'>
        <Navbar />
        <div>
        {props.children}
       
        </div>
         {/* <Principal/> */}
         <Footer /> 
</div>
  )
}

export default Main