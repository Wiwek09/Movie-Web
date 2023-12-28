import React from 'react'
import Movie from './components/Movie/page.jsx'
import Header from './components/Header/page.jsx'
import Footer from './components/Footer/page.jsx'


const Home = () => {

  return (
    <div className='m-4' >
      <Header/>
      <Movie/>
      <Footer/>
    </div>
  )
}

export default Home