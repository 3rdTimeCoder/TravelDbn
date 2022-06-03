import React from "react";
import "./locations.css";
import { locations } from "../../../imagesData";

const Locations = () => {
  // slice the empty string in the nature array
  const locationsArray = locations.splice(0, locations.length - 1);

  return (
    <section className="locations">
      <div className="locations__wrapper">
        <img
          src="/travelAssets/locations2.jpg"
          alt=""
          className="locations__img"
        />
        <h1>Locations to Visit EThekwini</h1>

        <div className="locations__card_section">
          {locationsArray.map((location, index) => {
            return (
              <article className="locations__card" key={index}>
                <img src={location} alt="" className="locations__card_img" />
                <h3>Loremo Ipsumo</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat assumenda earum dolorem reprehenderit placeat vitae
                  explicabo aliquid ipsa illo nisi quasi...
                  <a href="#deadlink">read more</a>
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Locations;
