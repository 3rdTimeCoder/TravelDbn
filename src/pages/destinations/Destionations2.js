import React, { useEffect, useState } from "react";
import "./destinations.css";
import { buildings, beaches, locations, nature } from "../../imagesData";
import { useHistory } from "react-router-dom";

const Destinations = () => {
  const history = useHistory();
  let [buildingsPointer, setBuildingsPointer] = useState(0);
  let [beachesPointer, setBeachesPointer] = useState(0);
  let [locationsPointer, setLocationsPointer] = useState(0);
  let [naturePointer, setNaturePointer] = useState(0);
  const numOfImgs = 9;


  const startSlider = (lastIndex, pointer, setPointer, seconds) => {
    let s = setInterval(() => {
      if (pointer > lastIndex) {
        // console.log("pointer > lastIndex");
        // setPointer(0);
        return;
      } else {
        setPointer(pointer++);
      }

      console.log("lastIndex", lastIndex);
      console.log("pointer", pointer);
    }, seconds);

    return s;
  };

  // Buildings
  useEffect(() => {
    if (buildingsPointer === 0) {
      startSlider(
        numOfImgs,
        buildingsPointer,
        setBuildingsPointer,
        3000
      );
    }
    if (buildingsPointer >= numOfImgs) {
      setBuildingsPointer(0);
    }
  }, [ buildingsPointer]);

  // Beaches
  useEffect(() => {
    if (beachesPointer === 0) {
      startSlider(beaches.length - 1, beachesPointer, setBeachesPointer, 4500);
    }
    if (beachesPointer >= beaches.length - 1) {
      setBeachesPointer(0);
    }
  }, [ beachesPointer]);

  // Locations
  useEffect(() => {
    if (locationsPointer === 0) {
      startSlider(
        locations.length - 1,
        locationsPointer,
        setLocationsPointer,
        5250
      );
    }
    if (locationsPointer >= locations.length - 1) {
      setLocationsPointer(0);
    }
  }, [ locationsPointer]);

  // Nature
  useEffect(() => {
    if (naturePointer === 0) {
      startSlider(nature.length - 1, naturePointer, setNaturePointer, 5900);
    }
    if (naturePointer >= nature.length - 1) {
      setNaturePointer(0);
    }
  }, [naturePointer]);

  return (
    <section className="destinations" onload="setBuilding">
      <div className="destinations__wrapper">
        <div className="destinations__heading">
          <h2>Destinations</h2>
          <div className="underline"></div>
        </div>

        <div className="destinations__images">
          <article
            className="destinations__imagesSect"
            onClick={() => history.push("/destinations/destination/1")}
          >
            <div className="destinations__imgContainer">
              {buildings.map((building, index) => {
                let position = "next";

                if (index === buildingsPointer) {
                  position = "active";
                }
                if (index === buildingsPointer - 1) {
                  position = "prev";
                }

                return <img src={building} className={position} alt="" />;
              })}
            </div>
            <h4>Buildings</h4>
          </article>

          <article
            className="destinations__imagesSect"
            onClick={() => history.push("/destinations/destination/2")}
          >
            <div className="destinations__imgContainer">
              {beaches.map((beach, index) => {
                let position = "next";

                if (index === beachesPointer) {
                  position = "active";
                }
                if (index === beachesPointer - 1) {
                  position = "prev";
                }

                return <img src={beach} className={position} alt="" />;
              })}
            </div>
            <h4>Beaches</h4>
          </article>

          <article
            className="destinations__imagesSect"
            onClick={() => history.push("/destinations/destination/3")}
          >
            <div className="destinations__imgContainer">
              {locations.map((location, index) => {
                let position = "next";

                if (index === locationsPointer) {
                  position = "active";
                }
                if (index === locationsPointer - 1) {
                  position = "prev";
                }

                return <img src={location} className={position} alt="" />;
              })}
            </div>
            <h4>Locations</h4>
          </article>

          <article
            className="destinations__imagesSect"
            onClick={() => history.push("/destinations/destination/4")}
          >
            <div className="destinations__imgContainer">
              {nature.map((nat, index) => {
                let position = "next";

                if (index === naturePointer) {
                  position = "active";
                }
                if (index === naturePointer - 1) {
                  position = "prev";
                }

                return <img src={nat} className={position} alt="" />;
              })}{" "}
            </div>
            <h4>Nature</h4>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
