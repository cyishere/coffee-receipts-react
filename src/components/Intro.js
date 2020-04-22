import React from "react";
import ArrowDown from "./ArrowDown";
import NavMenu from "./NavMenu";
import "./Intro.scss";

const Intro = () => {
  return (
    <div className="section intro">
      <NavMenu />
      <div className="intro-wrapper">
        <div className="intro-content">
           <p>
            It was a Christmas Eve, one of those days that I felt neither inspired
            nor motivated, just lost in the miserable feeling of self-doubt. :(
          </p>
          <p>
            Sitting in a nearby cafe, I saw a person writing something at the back
            of the receipt. Instantly, I realized all I should do was just to keep
            doing what I was doing.
          </p>
          <p>
            So I took out my pen and drew <strong>a little story</strong> at the
            back of my receipt, thinking that maybe one day I'd be able to finish
            100 stories in 100 different coffee places all over Tokyo and then
            stop.
          </p>
          <p>Then the day came but I didn't stop. :)</p>
        </div>
        <div className="intro-signature">
          <p>by Odding</p>
        </div>
      </div>
      <ArrowDown />
    </div>
  );
};

export default Intro;
