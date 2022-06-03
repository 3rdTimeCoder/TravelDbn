import React from "react";
import "./nature.css";
import { nature } from "../../../imagesData";

const Nature = () => {
  // slice the empty string in the nature array
  const natureArray = nature.splice(0, nature.length - 1);

  return (
    <section className="nature">
      <div className="nature__wrapper">
        <img
          src="/travelAssets/nature_banner.jpg"
          alt=""
          className="nature__img"
        />
        <h1>Places to Enjoy Nature EThekwini</h1>

        <div className="nature__card_section">
          {natureArray.map((nat, index) => {
            return (
              <article className="nature__card" key={index}>
                <img src={nat} alt="" className="nature__card_img" />
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

export default Nature;
