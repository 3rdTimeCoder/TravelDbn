import React from "react";
import "./buildings.css";
import { buildings } from "../../../imagesData";

const Buildings = () => {
  // slice the empty string in the nature array
  const buildingsArray = buildings.splice(0, buildings.length - 1);

  return (
    <section className="building">
      <div className="building__wrapper">
        <img
          src="/travelAssets/building_banner.jpg"
          alt=""
          className="building__img"
        />
        <h1>Buildings to See EThekwini</h1>

        <div className="building__card_section">
          {buildingsArray.map((building) => {
            return (
              <article className="building__card">
                <img src={building} alt="" className="building__card_img" />
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

export default Buildings;
