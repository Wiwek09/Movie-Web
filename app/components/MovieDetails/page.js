import React from 'react'

const MovieDetails = ({movie}) => {
  return (
    <div key={movie.id} className="bg-white rounded-lg shadow-lg border p-4 cursor-pointer  hover:border-blue-600  transition duration-500 ease-in-out ">
    <Link href={`/movie/${movie.id}`}>
      <div className="h-40 w-full relative mb-2">
        <Image
          src={movie.image}
          alt={movie.title}
          layout='fill'
          loading="lazy"
          className="h-40 w-full object-contain hover:scale-110 transition duration-500 ease-in-out mb-2 rounded"
        />
      </div>
      <h2 className="text-lg font-semibold mb-2">{movie.title}</h2>
      <p className="text-gray-600 text-xl font-bold ">${movie.price}</p>
    </Link>
  </div>
  )
}

export default MovieDetails