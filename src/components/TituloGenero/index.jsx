import React from 'react'
import { useEffect, useState } from 'react'

const Titulo = () => {

    const [genero, setGenero] = useState([])

 const urlGenre = 'https://api.themoviedb.org/genre/movie/list?api_key=b42ed93ba1c3eaf092244ca3270f8fff&language=pt-BR'

 const getNomeGenero = async(urlGenre) => {

    const response = await fetch(urlGenre, {
      mode: "no-cors",
      method: 'GET',
    });
    const data = await response.json();

    setGenero(data)
    
 };

  useEffect(() =>{
     getNomeGenero(urlGenre)
  }, [])



  return (
    <div>
       <h1>{genero.name}</h1>

    </div>
  )
}

export default Titulo