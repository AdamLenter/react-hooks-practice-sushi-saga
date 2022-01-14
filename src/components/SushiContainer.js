import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer( {sushiList, sushiLoaded, budget, addEatenSushi} ) {
  const [beginningSushi, setBeginningSushi] = useState(0);
  let displayedSushi;

  if(sushiLoaded) {
    displayedSushi = sushiList.slice(beginningSushi, (beginningSushi + 4));
  }

  function addSushi() {
    setBeginningSushi(beginningSushi + 4);
  }

  function selectSushi(sushi) {
    addEatenSushi(sushi);
  }

  return (
    <div className="belt">
      {sushiLoaded ? displayedSushi.map((sushi) => <Sushi key = {sushi.id} sushi = {sushi} selectSushi = {selectSushi} budget = {budget} />) : <p>Loading</p>}
      <MoreButton addSushi = {addSushi} />
    </div>
  );
}

export default SushiContainer;
