import React, { useState } from "react";

function Sushi( {sushi, selectSushi, budget } ) {

  const [sushiEaten, setSushiEaten] = useState(false); 
  
  function handleSelectSushi(sushi) {
    if(sushi.price <= budget && !sushiEaten) {
      setSushiEaten(true);
      selectSushi(sushi);
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleSelectSushi(sushi)}>
        
        {sushiEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
