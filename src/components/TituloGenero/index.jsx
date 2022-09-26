import React from 'react'
import { useEffect, useState } from 'react'


const urlGenre = 'https://api.themoviedb.org/3/genre/movie/list?api_key=b42ed93ba1c3eaf092244ca3270f8fff&language=pt-BR'
const Titulo = () => {

 

  
    const [genero, setGenero] = useState([])

 

 const getNomeGenero = async () => {

    
    const response = await fetch (urlGenre)
    const data = await response.json()

    setGenero(data.genres)
    console.log(data)
    
 }

  useEffect(() =>{
     getNomeGenero(urlGenre)
  }, [id])



  return (
    <div>
      
             <h1>{genre.name}</h1>

        
      

    </div>
  )
}

export default Titulo