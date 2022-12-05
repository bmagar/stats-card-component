import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <section className="main-section">
        <div>
          <img
            className="hero-image"
            src={require("./images/image-header-mobile.jpg")}
          />
        </div>
        <div className="content-info">
          <div>
            <h1 className="primary-info">
              Get <span className="main-word">insights</span>that help your
              business grow.
            </h1>
            <p>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </div>
          <div className="secondary-info">
            <div className="hey">
              <h4>10k+</h4>
              <p>Companies</p>
            </div>
            <div className="hey">
              <h4>314</h4>
              <p>templates</p>
            </div>
            <div className="hey">
              <h4>12m+</h4>
              <p>Quries</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
