import React from 'react'
import './Home.css'
import LogoVertical from '../../assets/logo-vertical.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <h1>Welcome to</h1>
        <img src={LogoVertical} className='home-logo' />
        <div className='home-buttons'>
          <button type='submit'><Link to="/condition/" style={{ textDecoration: 'none' }}>Guest</Link></button>
          <button type='submit'><Link to='/login/' style={{ textDecoration: 'none' }}>Login</Link></button>
        </div>
        <h2>What we do:</h2>
        <p>Cure Connect is a company that is dedicated to promoting better healthcare for individuals by connecting them with the best medical institutions for their specific symptoms. The company's main focus is to help people find the right medical facility for their needs, whether it be a walk-in clinic, pharmacy, or hospital. By utilizing an advanced algorithm, Cure Connect is able to analyze a person's symptoms and provide recommendations for the most suitable medical institution. The company's goal is to reduce wait times and improve the overall healthcare experience for patients. With its user-friendly platform and easy-to-use interface, Cure Connect is making it easier for individuals to receive the medical care they need. The company is committed to providing its users a seamless and stress-free healthcare journey.</p>
      </div>
    </>
  )
}

export default Home