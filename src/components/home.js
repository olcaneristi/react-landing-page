import React from "react"
import Logo from "../assets/images/logo.svg"

function Home() {
  return (
    <section className="home">
      <div className="home-container">
        <img className="logoimg" src={Logo} alt="Logo" loading="lazy" />
        <h1 className="hometitle">A history of everything you copy</h1>
        <p className="homedesc">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="homebuttons">
          <button className="btn-ios">Download for iOS</button>
          <button className="btn-mac">Download for Mac</button>
        </div>
      </div>
    </section>
  )
}

export default Home
