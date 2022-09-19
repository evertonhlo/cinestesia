import React from 'react'
import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'


import Main from '../../components/Main'





const Detalhe = () => {

  const {id} = useParams()
 console.log(id)


  const [pegaDetalhe, setPegaDetalhe] = useState([])

  const getDetalhe = async (filme) => {

       const urlDetalhes = `https://api.themoviedb.org/3/movie/${filme}?api_key=b42ed93ba1c3eaf092244ca3270f8fff&language=en-US`


    const response = await fetch(urlDetalhes) ;
    const data = await response.json()
    
    setPegaDetalhe(data)
    console.log(data)
    }; 
    

    useEffect(() =>{
      getDetalhe(id)
  
  
    }, [id])

  



  return(
    <Main>

    <h2>Página Detalhe </h2>
 
       <span key= {pegaDetalhe.id}>
        <h2 >{pegaDetalhe.original_title}</h2>
     
        <h1>{pegaDetalhe.popularity}</h1>
        <p>{pegaDetalhe.overview}</p>
        <img src={`https://image.tmdb.org/t/p/w500/${pegaDetalhe.backdrop_path}`} alt={pegaDetalhe.title}/> 
      </span>
    

    
    
    
    </Main>
   
)
}
export default Detalhe