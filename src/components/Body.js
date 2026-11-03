import React from "react";
import resObj from "../mockData/resObj";
import RestaurantCard from "./RestaurantCard";

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
export default Body;
