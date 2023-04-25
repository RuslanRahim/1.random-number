import React,{useState} from "react";
import "./App.css"

function App() {

  const[minval,setMinval]=useState(1);
  const[maxval,setMaxval]=useState(10);
  const[randomNum,setRandomNum]=useState(5);

  const giveRandomNumber=()=>{
    setRandomNum(Math.floor(Math.random()*(maxval-minval +1)+minval))
  }



  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>
            Rondom Number : <span>{randomNum}</span>
          </p>
        </div>

        <div className="numContainer">
          <div>
            <p>Min :</p>
            <input
              type="number"
              value={minval}
              onChange={(e) => setMinval(e.target.value)}
            />
          </div>

          <div>
            <p>Max :</p>
            <input
              type="number"
              value={maxval}
              onChange={(e) => setMaxval(e.target.value)}
            />
          </div>
        </div>

        <button onClick={giveRandomNumber}>Get Random Number</button>
      </div>
    </div>
  );
}

export default App;
