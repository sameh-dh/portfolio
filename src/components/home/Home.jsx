import React from 'react'
import "../../css/Home.css"
import Social from "./Social.jsx"

const Home = () => {
  return (
<section className="home section" id="home">
    <div className="home__container container grid">
   <div className="home__content grid">
    <Social />
     <div className="home_img"></div>
    
   </div>
    </div>
</section>  )
}

export default Home