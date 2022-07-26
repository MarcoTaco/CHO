import React from 'react';

function Home() {
  return (
    <div className="main">
      <div className="banner-img">
        <img></img>
        <div className="banner-btn">
          <span>Toothbrushes</span>
          <span>Charcoal Toothpaste</span>
        </div>
      </div>
      <div className="introduction">
        <h5>Introducing</h5>
        <p>I am just adding random verbiage for now. I am going to change this shit real hard once I know what to put here.</p>
        <div className="shop toothbrush">
          <img></img>
          <span>Shop</span>
          <span>Toothbrushes</span>
        </div>
        <div className="shop toothpaste">
          <img></img>
          <span>Shop</span>
          <span>Toothpaste</span>
        </div>
      </div>
      <div className="sellers new">
        <p>Toothbrush</p>
        <p>Toothpaste</p>
        <div className="karen-soul">
          <div className="first-img">
            <img></img>
            <span>Title</span>
            <span>Price</span>
          </div>
          <div className="second-img">
            <img></img>
            <span>Title</span>
            <span>Price</span>
          </div>
        </div>
      </div>
      <div className="sellers best">
      <p>Toothbrush</p>
        <p>Toothpaste</p>
        <div className="karen-soul">
          <div className="first-img">
            <img></img>
            <span>Title</span>
            <span>Price</span>
          </div>
          <div className="second-img">
            <img></img>
            <span>Title</span>
            <span>Price</span>
          </div>
        </div>
      </div>
      <div className="categories">
        <div className="brush hard">
          <img></img>
          <span>Hard</span>
          <span>Brush</span>
        </div>
        <div className="brush medium">
          <img></img>
          <span>Medium</span>
          <span>Brush</span>
        </div>
        <div className="brush soft">
          <img></img>
          <span>Soft</span>
          <span>Brush</span>
        </div>
        <div className="brush medium">
          <img></img>
          <span>Medium</span>
          <span>Brush</span>
        </div>
        <div className="brush toothpaste">
          <img></img>
          <span>Toothpaste</span>
        </div>
      </div>
    </div>
  );
}

export default Home