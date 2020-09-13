import React from "react";
import "./Home.css";
import UpTime from "./UpTime";
import { Link } from "react-router-dom";
import { greet } from "./About";
import Card from "./Card";

const name = "bishu";
const img1 = "https://picsum.photos/250/300";
const img4 = "https://picsum.photos/230/300";
const link = "https://www.sainotech.com";

const Home = () => {
  return (
    <div className="Home">
      <h1 className="ndHeading">
        Current Time is <UpTime /> {greet} !
      </h1>
      <h1 className="heading">Hello I'm From Home Page</h1>
      <h1 className="ndHeading">My name is {name}</h1>
      <div className="imgall">
        <a href={link} target="bihsu">
          <img src={img1} alt="randomImages" />
        </a>
        <Link to="About">
          <img src={img4} alt="randomImages" />
        </Link>
        <Card 
        id="5"
        sname="Bishu"
        img= "https://vignette.wikia.nocookie.net/dark-netflix/images/d/dc/DARK_Season_2_Poster_-_English.jpg/revision/latest?cb=20190607155817"
        link="https://www.sainotech.com"
        title="Hero"
        />
      </div>
    </div>
  );
};
export default Home;
