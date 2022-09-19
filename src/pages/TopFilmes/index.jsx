import React from 'react'
import {useState, useEffect} from "react"
import {useNavigate} from 'react-router-dom'
import './style.css'
// import { useParams } from 'react-router-dom'

const urlMost = 'https://api.themoviedb.org/3/discover/movie?api_key=b42ed93ba1c3eaf092244ca3270f8fff&language=en-US&'


function TopFilmes() {

//   const {id} = useParams()
//  console.log(id)
 
  const [mostMovies, setMostMovies] = useState([])
  // const [detalhes, setDetalhes] = useState([])

  const getMostMovies = async (urlMost) => {
   
    
    const response = await fetch(urlMost) ;
    const data = await response.json()

    setMostMovies(data.results)
  }; 

  useEffect(() =>{
      getMostMovies(urlMost)
  }, [])



  const history = useNavigate()
  
  const handleRedirect =() =>{
    
}

////



  return (
    <div  key= {"id"} className='container'>
    {mostMovies && mostMovies.map((movieTop) => (

      <div key= {movieTop.id} className='container-topfilmes' 
             onClick={(()=> handleRedirect(
                history(`/detalhe/${movieTop.id}`)
              ))}>

      <p className='titulos' >{movieTop.title}</p>  
      <img src={`https://image.tmdb.org/t/p/w500/${movieTop.backdrop_path}`} alt={movieTop.title}></img>

      </div>
    
     
     ))}
    </div>
  )
}

export default TopFilmes


