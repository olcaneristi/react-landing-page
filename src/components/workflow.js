import React from "react"
import ImageDevice from "../assets/images/image-devices.png"
import Blacklist from "../assets/images/icon-blacklist.svg"
import Text from "../assets/images/icon-text.svg"
import Preview from "../assets/images/icon-preview.svg"

function Workflow() {
  return (
    <section className="workflow">
      <div className="work-content">
        <h1>Access Clipboard anywhere</h1>
        <p className="work-desc">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
      </div>
      <div className="work-image">
        <img
          className="devices"
          src={ImageDevice}
          loading="lazy"
          alt="devices"
        />
      </div>
      <div className="workflow-product-cont">
        <h1>Supercharge your workflow</h1>
        <p className="cont-desc">
          We've got the tools to boost your productivity.
        </p>
      </div>
      <div className="product-card">
        <div className="prod">
          <img src={Blacklist} alt="blacklist" loading="lazy" />
          <h2 className="prod-title">Create blacklist</h2>
          <p className="prod-desc">
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </div>
        <div className="prod">
          <img src={Text} alt="blacklist" loading="lazy" />
          <h2 className="prod-title">Plain text snippets</h2>
          <p className="prod-desc">
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </div>
        <div className="prod">
          <img src={Preview} alt="blacklist" loading="lazy" />
          <h2 className="prod-title">Sneak preview</h2>
          <p className="prod-desc">
            Quick preview of all snippets on your Clipboard for easy access.{" "}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Workflow
