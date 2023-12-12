import React, { useState, useEffect } from "react";
import "./hello.css";

const Hello = () => {
  const greetings = [
    "Hello",
    "Hola",
    "Bonjour",
    "Ciao",
    "Hallo",
    "Konnichiwa",
    "Namaste",
  ];
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIndex(
        (prevIndex) => (prevIndex + 1) % greetings.length
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentGreetingIndex === greetings.length) {
      document.body.classList.add("fadeOutUp");
      fadeOut(true);
    }
  }, [currentGreetingIndex, greetings.length]);

  return (
    <div className={`container ${fadeOut ? "fadeOutUp" : ""}`}>
      <div className="greetings">
        <h1>{greetings[currentGreetingIndex]}</h1>
      </div>
    </div>
  );
};

export default Hello;
