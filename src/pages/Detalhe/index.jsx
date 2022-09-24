import React from 'react'
import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'


import Main from '../../components/Main'



import './style.css'

const Detalhe = () => {

  const {id} = useParams()
 console.log(id)


  const [pegaDetalhe, setPegaDetalhe] = useState([])

  const getDetalhe = async (filme) => {

       const urlDetalhes = `https://api.themoviedb.org/3/movie/${filme}?api_key=b42ed93ba1c3eaf092244ca3270f8fff&language=pt-BR`


    const response = await fetch(urlDetalhes) ;
    const data = await response.json()
    
    setPegaDetalhe(data)
    console.log(data)
    }; 
    

    useEffect(() =>{
      getDetalhe(id)
  
  
    }, [id])

  



  return(
    <Main >
      <div className="container-detalhe">
        
       <span className='card-detalhe' key= {pegaDetalhe.id}>
        <h1 className='card-title'>{pegaDetalhe.original_title}</h1>
       <p className='card-overview'>{pegaDetalhe.overview}</p>
  

     
        {/* <h1 className='card-popularity'>{pegaDetalhe.popularity}</h1> */}
        {/* <p className='card-release'>{pegaDetalhe.release_date}</p>
        <p className='card-tagline'>{pegaDetalhe.tagline}</p> */}
        <img className='card-image'src={`https://image.tmdb.org/t/p/w500/${pegaDetalhe.backdrop_path}`} alt={pegaDetalhe.title}/> 
      </span>
    
      </div>

    
    
    
    </Main>
   
)
}
export default Detalhe