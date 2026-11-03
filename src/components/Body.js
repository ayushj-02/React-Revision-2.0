import React, { useState } from "react";
import resObj from "../mockData/resObj";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // let listOfRestaurants = resObj;

  const [listOfRestaurants, setListOfRestaurants] = useState(resObj);
  const [onBtnClick, setOnBtnClick] = useState(false);

  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for restaurants..." />
        <button>Search</button>
      </div>

      <div className="filters">
        <button
          className={onBtnClick ? "filter-btn active" : "filter-btn"}
          onClick={() => {
            setListOfRestaurants(
              onBtnClick
                ? resObj
                : resObj.filter((res) => res.info.avgRating > 4.5),
            );
            setOnBtnClick(!onBtnClick);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <h2 className="section-title">Restaurants near you</h2>
      <div className="res-container">
        {listOfRestaurants?.map((i) => {
          return <RestaurantCard key={i.info.id} data={i} />;
        })}
      </div>
    </div>
  );
};
export default Body;
