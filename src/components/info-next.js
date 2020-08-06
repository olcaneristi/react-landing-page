import React from "react"
import Image from "../assets/images/image-computer.png"

function InfoNext() {
  return (
    <section className="infonext">
      <div className="imagelogo">
        <img className="pcimg" src={Image} alt="computer" loading="lazy" />
      </div>
      <div className="infonext-content">
        <div className="spec">
          <h2 className="infonext-title">Quick Search</h2>
          <p className="infonext-desc">
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
        </div>
        <div className="spec">
          <h2 className="infonext-title">iCloud Sync</h2>
          <p className="infonext-desc">
            Instantly saves and syncs snippets across all your devices.
          </p>
        </div>

        <div className="spec">
          <h2 className="infonext-title">Complete History</h2>
          <p className="infonext-desc">
            Retrieve any snippets from the first moment you started using the
            app.
          </p>
        </div>
      </div>
    </section>
  )
}

export default InfoNext
