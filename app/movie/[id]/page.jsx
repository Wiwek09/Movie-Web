"use client"

import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Footer from '@/app/components/Footer/page';


const Movie = (props) => {

  const {params} = props;

  const [movieData, setMovieData] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}`,
        {
          params: {
            api_key: process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      
    const value = response.data
    setMovieData(value);
    // console.log('value', value)
    // console.log(value.adult)
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  }

  useEffect( () => {
    fetchData()
  }
  ,[params.id]
)
  

const { title,poster_path, overview, status } = movieData;
  
  return (
    <div className='m-4' >
      <div className='flex flex-col  justify-center items-center ' style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} loading="lazy" layout='intrinsic' height={300} width={300} className="flex justify-center items-center mb-4  " style={{ borderRadius: '8px' }} />
      <p className="text-gray-600 mb-4 font-bold text-2xl ">{ status }</p>
      <p className='' style={{ lineHeight: '1.6' }}>{overview}</p>
      <div className='mt-4' >
     </div>
     </div>
     <Footer/>
    </div>
  )
}

export default Movie