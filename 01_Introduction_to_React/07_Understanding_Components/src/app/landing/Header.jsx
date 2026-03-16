import React from 'react'

import reactImg from "../../assets/vite.svg"; // We should import it and then use this because when we directly give link of img in src, then it would get corrupted because when we build the project it will create an build folder and than build folder contains an hash of the images inside of assets.

function Header() {
  return (
    <>
      <header>
        <img
          src={reactImg}
          alt=""
          style={{ height: "100px", width: "100px" }}
        />
        <h1>
          Hi, i am a React{" "}
          <span style={{ color: "greenYellow", textDecoration: "underline" }}>
            Developer
          </span>
        </h1>
      </header>
    </>
  );
}

export default Header