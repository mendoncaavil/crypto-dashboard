import React from 'react'
// import Header from '../Components/Common/Header'
import Header from '../Components/Common/Header/Index'
import LandingPage from '../Components/LandingPage/Intro/index' 
// import Footer from '../Components/Common/Footer/Footer'

function Home() {
  return (
    <div>
        <Header/>
        <LandingPage/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home