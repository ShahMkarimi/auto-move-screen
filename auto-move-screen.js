// this branche is about reach code in real I rewrite the code in react

import React, { useState, useEffect } from "react";
import App from "../App";

const AutoMove = () => {
  const [paused, setPaused] = useState(true);
  const [speed, setSpeed] = useState(3);
  const interval = speed * 7; //you can change the speed form here by the change of "7 seconde" number.

  useEffect(() => {
    let scrollerId;
    if (!paused) {
      scrollerId = setInterval(() => {
        window.scrollBy(0, 2);
        if (window.innerHeight + window.scrollY == document.body.offsetHeight) {
          setPaused(true);
        }
      }, interval);
    }
    return () => {
      clearInterval(scrollerId);
    };
  }, [paused, interval]);

  const handleKeyPress = (event) => {
    if (event.which == 13 || event.keyCode == 13) {
      //change the control key by the code key number
      setPaused(!paused);
    }
  };

  return (
    <div onKeyPress={handleKeyPress} tabIndex="0">
      {/* your content here */}
    </div>
  );
};

export default AutoMove;
