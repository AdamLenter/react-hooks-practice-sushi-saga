import React, { useEffect, useState}  from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([])
  const [sushiLoaded, setSushiLoaded] = useState(false)
  const [budget, setBudget] = useState(100);
  const [eatenSushi, setEatenSushi] = useState([]);

  function addEatenSushi(sushi) {
    const newEatenSushi = [...eatenSushi, sushi];
    setEatenSushi(newEatenSushi);

    const newBudget = (budget - sushi.price);
    setBudget(newBudget);
  }

  useEffect(()=> {
    fetch(API)
      .then((r)=>r.json())
      .then((sushi) => setSushiList(sushi))
      .then(()=>setSushiLoaded(true))   
      }, [])
  return (
    <div className="app">
      <SushiContainer sushiList = {sushiList} sushiLoaded = {sushiLoaded} budget = {budget} addEatenSushi = {addEatenSushi} />
      <Table budget = {budget} plates = {eatenSushi} />
    </div>
  );
}

export default App;
