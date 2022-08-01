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
        <h3>Introducing</h3>
        <p>I am just adding random verbiage for now. I am going to change this once I know what to put here.</p>
        <div className="toothbrush">
          <img></img>
          <span>Shop</span>
          <span>Toothbrushes</span>
        </div>
        <div className="toothpaste">
          <img></img>
          <span>Shop</span>
          <span>Toothpaste</span>
        </div>
      </div>
      <div className="to-sale">
        <div className="sellers best">
          <h3>Best Sellers</h3>
          <div className="choice">
            <p>Toothbrush</p>
            <p>Toothpaste</p>
          </div>
          <div className="karen-soul">
            <div className="best-row">
              <div className="first-img">
                <img></img>
                <p>Title</p>
                <p>Price</p>
              </div>
              <div className="second-img">
                <img></img>
                <p>Title</p>
                <p>Price</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sellers new">
          <h3>New In Stock</h3>
          <div className="choice">
          <p>Toothbrush</p>
          <p>Toothpaste</p>
          </div>
          <div className="karen-soul">
            <div className="new-row">
              <div className="first-img">
                <img></img>
                <p>Title</p>
                <p>Price</p>
              </div>
              <div className="second-img">
                <img></img>
                <p>Title</p>
                <p>Price</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="categories">
        <div className="brush hard">
          <img></img>
          <span>Hard Brush</span>
        </div>
        <div className="brush medium">
          <img></img>
          <span>Medium Brush</span>
        </div>
        <div className="brush soft">
          <img></img>
          <span>Soft Brush</span>
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