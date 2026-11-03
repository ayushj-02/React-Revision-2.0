import React from "react";
import ReactDOM from "react-dom/client";
import resObj from "./mockData/resObj";

/*
* Header
    - Logo
    - Nav Items
* Body
    - Search
    - RestaurantContainer
      - RestaurantCards
        - Image
        - Name , Star Rating, Cuisine, ETA etc
* Footer
    - Copyright
    - Links
    - Address
    - Contact 
*/

// Header
const Header = () => {
  const options = ["Home", "About Us", "Contact Us", "Cart"];
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-unique-food-logo-png-image_15488394.png"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          {options.map((i, index) => {
            return <li key={index}>{i}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

// RestaurantCard
const RestaurantCard = (props) => {
  const { data } = props;

  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    data?.info;
  return (
    <div className="res-card">
      <div className="res-image-wrapper">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt={name}
          className="res-logo"
        />
      </div>
      <div className="res-info">
        <h3 className="res-name">{name}</h3>
        <div className="res-meta">
          <span className={avgRating >= 4 ? "rating" : "rating low"}>
            ★ {avgRating}
          </span>
          <span>•</span>
          <span>{sla?.slaString}</span>
        </div>
        <p className="res-cuisines">{cuisines?.join(", ")}</p>
        <p className="res-cost">{costForTwo}</p>
      </div>
    </div>
  );
};
// Body
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for restaurants..." />
        <button>Search</button>
      </div>
      <h2 className="section-title">Restaurants near you</h2>
      <div className="res-container">
        {resObj.map((i) => {
          return <RestaurantCard key={i.info.id} data={i} />;
        })}
      </div>
    </div>
  );
};

// Footer
const Footer = () => {
  return (
    <div className="footer">
      © {new Date().getFullYear()} Food App. All rights reserved.
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
