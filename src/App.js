import React from "react"
import "./assets/styles.scss"
import Home from "./components/home"
import Info from "./components/info"
import InfoNext from "./components/info-next"
import Workflow from "./components/workflow"
import Sponsors from "./components/sponsors"
import Download from "./components/download"
import Footer from "./components/footer"
function App() {
  return (
    <div className="App">
      <Home />
      <Info />
      <InfoNext />
      <Workflow />
      <Sponsors />
      <Download />
      <Footer />
    </div>
  )
}

export default App
