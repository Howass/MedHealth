import React from 'react'
import './Home.css'
import LogoVertical from '../../assets/logo-vertical.png'

const Home = () => {
  const handleGuest = () => {
    console.log("guest");
  }

  const handleSignIn = () => {
    console.log("login");
  }

  return (
    <>
      <div className='home-container'>
        <h1>Welcome to</h1>
        <img src={LogoVertical} className='home-logo' />
        <div className='home-buttons'>
          <button type='submit' onSubmit={handleGuest}>Guest</button>
          <button type='submit' onSubmit={handleSignIn}>Sign In</button>
        </div>
        <h2>What we do:</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae fuga quis soluta non tempore dolor expedita, quam et nam ducimus nostrum dolores dolorem quae iste natus, aut quia voluptatum eligendi in, magnam enim deleniti vitae. Animi natus possimus voluptate. Illo praesentium, doloribus quidem vero, ad accusamus, delectus mollitia veritatis at id veniam temporibus distinctio nam in reiciendis fugiat obcaecati pariatur eveniet consectetur! Atque perferendis optio culpa eius, voluptate voluptas dolores illum voluptates aspernatur veritatis quibusdam sequi porro modi dolorum corrupti magnam nulla itaque velit aliquid et pariatur maiores! Sapiente aliquid enim perspiciatis ratione iusto facilis quis ea sunt deserunt iure?</p>
      </div>
    </>
  )
}

export default Home