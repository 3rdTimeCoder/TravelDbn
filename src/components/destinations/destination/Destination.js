import React from "react";
import "./destination.css";
import { useParams } from "react-router";
import Buildings from "../buildings/Buildings";
import Beaches from "../beaches/Beaches";
import Locations from "../locations/Locations";
import Nature from "../nature/Nature";

const Destination = () => {
  const id = parseInt(useParams().id);
  console.log(id);

  return (
    <div className="destination">
      {id === 1 ? (
        <Buildings />
      ) : id === 2 ? (
        <Beaches />
      ) : id === 3 ? (
        <Locations />
      ) : (
        <Nature />
      )}
    </div>
  );
};

export default Destination;
