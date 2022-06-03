import React from "react";
import "./home.css";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import Facebook from "@material-ui/icons/Facebook";

const Home = () => {
  return (
    <section className="home">
      
      {/* video from: https://www.youtube.com/watch?v=FNrPITxpX3Y */}
      <video
        src="/travelAssets/DbnBg.mp4"
        className="home__video"
        muted
        loop
        autoPlay
      ></video>

      <div className="home__text">
        <h2>EThekwini</h2>
        <h3>Where everyday's Friday.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempore
          doloribus nisi? Nesciunt deserunt, delectus doloremque sint excepturi
          aut tenetur blanditiis in et, unde vitae.
        </p>
        <a href="/destinations">Explore</a>
      </div>


      <ul className="home__social-links">
        <li>
          <a href="#deadlink">
            <Facebook className="home__socialIcons" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/3rdTimeCoder" target="_blank" rel="noopener noreferrer">
            <Twitter className="home__socialIcons" />
          </a>
        </li>
        <li>
          <a href="#deadlink">
            <Instagram className="home__socialIcons" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Home;
