import React from 'react'
import { useEffect, useState } from 'react'
import Main from '../../components/Main/index'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

import './style.css'



const Genero = () => {

  const {id} = useParams()
 console.log(id)

 //id do genero

 const [generoFilme, setGeneroFilmes] = useState([])

  const getGeneroFilmeMovies = async (genreId) => {
   
      const urlGenerosFilme = `https://api.themoviedb.org/3/discover/movie?api_key=b42ed93ba1c3eaf092244ca3270f8fff&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1 &with_genres=${genreId}`

    const response = await fetch(urlGenerosFilme) ;
    const data = await response.json()

    setGeneroFilmes(data.results)
console.log(data)
  }; 

  useEffect(() =>{
      getGeneroFilmeMovies(id)
  }, [id])


  const history = useNavigate()
  
  const handleRedirect =() =>{
    
}


  return (

    <div className='genero'>
      
      <Main className='container-genero'>
        <h1 className='titulo-generos'>  </h1>
{generoFilme && generoFilme.map((genero) =>(
  
    
   <span className='card' key={genero.id}  onClick={(()=> handleRedirect(
    history(`/detalhe/${genero.id}`)))}>
          {/* <p>{genero.title}</p> */}
        <h3>{genero.title}</h3>
        
         <img className='imagem' src={`https://image.tmdb.org/t/p/w500/${genero.backdrop_path}`} alt={genero.title}></img>
      </span>
     
))}
</Main>
  

    </div>
  )
}

export default Genero