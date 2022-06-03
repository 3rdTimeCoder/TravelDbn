import React from "react";
import "./beaches.css";
import { beaches } from "../../../imagesData";

function Beaches() {
  // slice the empty string in the nature array
  const beachesArray = beaches.splice(0, beaches.length - 1);

  return (
    <section className="nature">
      <div className="beaches__wrapper">
        <img src="/travelAssets/beach3.jpg" alt="" className="beaches__img" />
        <h1>Beaches to check out EThekwini</h1>

        <div className="beaches__card_section">
          {beachesArray.map((beach, index) => {
            return (
              <article className="beaches__card" key={index}>
                <img src={beach} alt="" className="beaches__card_img" />
                <h3>Loremo Ipsumo</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat assumenda earum dolorem reprehenderit. Aliquid ipsa illo nisi quasi...
                  <a href="#deadlink">read more</a>
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Beaches;
