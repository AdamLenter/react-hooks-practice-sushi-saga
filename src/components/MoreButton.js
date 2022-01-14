import React from "react";

function MoreButton( {addSushi} ) {
  function processMoreButton() {
    addSushi();
  }
  return <button onClick={processMoreButton}>More sushi!</button>;
}

export default MoreButton;
