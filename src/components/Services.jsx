import React from 'react';
import itemImage from '../assets/kim.jpg';
import './services.css'

const Services = () => {
  return (
   
  <div className='second-section'>
  <h1>Our bestsellers</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, mollitia.</p>

  <div className="card-container">

  <div className="card">
    <img className='items' src={itemImage}alt="" />
    <h2>Lorem, ipsum dolor. <br />$29.5</h2>
  </div>
  <div className="card">
    <img className='items' src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VydW18ZW58MHx8MHx8fDA%3D" alt="" />
    <h2>Lorem, ipsum dolor. <br />$15</h2>
  </div>
  <div className="card">
    <img className='items' src="https://images.unsplash.com/photo-1656147961287-3f91d30e086e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHNlcnVtfGVufDB8fDB8fHww" alt="" />
    <h2>Lorem, ipsum dolor. <br />$19.5</h2>
  </div>
  <div className="card">
    <img className='items' src="https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <h2>Lorem, ipsum dolor. <br />$12.34</h2>
  </div>
  
 
  
  
</div>

</div>

  )
}

export default Services
