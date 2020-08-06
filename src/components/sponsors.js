import React from "react"
import Google from "../assets/images/logo-google.png"
import IBM from "../assets/images/logo-ibm.png"
import Microsoft from "../assets/images/logo-microsoft.png"
import HP from "../assets/images/logo-hp.png"
import Vector from "../assets/images/logo-vector-graphics.png"

function Sponsors() {
  return (
    <section className="sponsors">
      <div className="sponsor-flex">
        <img src={Google} alt="Google" loading="lazy" />
        <img src={IBM} alt="Google" loading="lazy" />
        <img src={Microsoft} alt="Google" loading="lazy" />
        <img src={HP} alt="Google" loading="lazy" />
        <img src={Vector} alt="Google" loading="lazy" />
      </div>
    </section>
  )
}

export default Sponsors
