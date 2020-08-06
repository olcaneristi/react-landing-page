import React from "react"

function Platform() {
  return (
    <section className="platform">
      <div className="platform-container">
        <h1>Clipboard for iOS and Mac OS</h1>
        <p className="plat-desc">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>
        <div className="platform-buttons">
          <button className="btn-ios">Download for iOS</button>
          <button className="btn-mac">Download for Mac</button>
        </div>
      </div>
    </section>
  )
}

export default Platform
