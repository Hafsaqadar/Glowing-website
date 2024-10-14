import React from 'react';
import './hero.css'; 
import image from '../assets/unsplash-removebg-preview.png';



const Hero = () => {
  return (

  <section className='hero-sec'>
   
  <p className='first-parag'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dignissimos velit sequi saepe ipsa necessitatibus officia? Tempora modi nam quos, earum quibusdam  !</p>
  
  <img src={image} alt="" />

  </section>


  )
}

export default Hero
