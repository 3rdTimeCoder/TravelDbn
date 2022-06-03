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
  const [numOfImgs, setNumOfImgs] =  useState(9);

  const startSlider = (lastIndex, pointer, setPointer, seconds) => {

    let s = setInterval(() => { //try usinf useRef instead and see if it makes a difference in execution.
      if (pointer > lastIndex) {
        return;
      } else {
        setPointer(pointer++);
      }
    }, seconds);

    return s;
  };

  // // Buildings
  useEffect(() => {
    let slide1 = null;
    if (buildingsPointer <= numOfImgs) {
      slide1 = startSlider(
        numOfImgs,
        buildingsPointer,
        setBuildingsPointer,
        2000
      );
    }
    if (buildingsPointer >= numOfImgs) {
      setBuildingsPointer(0);
    }

    return ()=>{
      clearInterval(slide1)
    }
  }, [ buildingsPointer]);

  // Beaches
  useEffect(() => {
    let slide2 = null;
    if (beachesPointer <= numOfImgs) {
      slide2 = startSlider(
        numOfImgs, 
        beachesPointer, 
        setBeachesPointer, 
        4000
        );
    }
    if (beachesPointer >= numOfImgs) {
      setBeachesPointer(0);
    }

    return ()=>{
      clearInterval(slide2)
    }
  }, [ beachesPointer]);

  // // Locations
  useEffect(() => {
    let slide3 = null;
    if (locationsPointer <= numOfImgs) {
      slide3 = startSlider(
        numOfImgs,
        locationsPointer,
        setLocationsPointer,
        4550
      );
    }
    if (locationsPointer >= numOfImgs) {
      setLocationsPointer(0);
    }
    return ()=>{
      clearInterval(slide3)
    }
  }, [ locationsPointer]);

  // // Nature
  useEffect(() => {
    let slide4 = null;
    if (naturePointer <= numOfImgs) {
      slide4 = startSlider(
        numOfImgs, 
        naturePointer, 
        setNaturePointer, 
        5000
        );
    }
    if (naturePointer >= numOfImgs) {
      setNaturePointer(0);
    }
    return ()=>{
      clearInterval(slide4)
    }
  }, [naturePointer]);

  return (
    
    <section className="destinations">
      <div className="destinations__wrapper">
        <div className="destinations__heading">
          <h2>Destinations</h2>
          <div className="underline"></div>
        </div>

        <div className="destinations__images">
          <article
            className="destinations__imagesSect"
            onClick={ ()=>{history.push("/buildings")}}
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

                return <img src={building} className={position} alt="beach front" key={index} />;
              })}
            </div>
            <h4>Buildings</h4>
          </article>

          <article
            className="destinations__imagesSect"
            onClick={() => {history.push("/beaches")}}
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

                return <img src={beach} className={position} alt="beach front" key={index} />;
              })}
            </div>
            <h4>Beaches</h4>
          </article>

          <article
            className="destinations__imagesSect"
            onClick={() => history.push("/locations")}
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

                return <img src={location} className={position} alt="beach front" key={index} />;
              })}
            </div>
            <h4>Locations</h4>
          </article>

          <article
            className="destinations__imagesSect"
            onClick={() => history.push("/nature")}
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

                return <img src={nat} className={position} alt="beach front" key={index} />;
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
