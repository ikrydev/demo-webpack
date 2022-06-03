import React, { useState } from "react";

import Button from "unify-react-desktop/build/Button";

import "./style.css";

export default function Home() {
  const handleClick = async () => {
    const { default: showAlert } = await import("./helpers/alerter.js");
    showAlert("button clicked");
  };
  return (
    <section>
      <h1 className="title-home">Home Page</h1>
      <Button main filled onClick={handleClick}>
        Test
      </Button>
    </section>
  );
}
