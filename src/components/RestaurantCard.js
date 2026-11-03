import React from "react";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { data } = props;

  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    data?.info;
  return (
    <div className="res-card">
      <div className="res-image-wrapper">
        <img
          src={`${CDN_URL}${cloudinaryImageId}`}
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

export default RestaurantCard;
