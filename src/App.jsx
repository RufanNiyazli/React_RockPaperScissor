import { useState } from "react";
import "./App.css";
import Player from "./Components/Player";
import Oppenent from "./Components/Oppenent";

function App() {
  const [playerNumber, setPlayerNumber] = useState(null);
  const [opponentNumber, setOpponentNumber] = useState(null);

  const random = () => {
    const NewopponentNumber = Math.floor(Math.random() * 3) + 1;
    const NewplayerNumber = Math.floor(Math.random() * 3) + 1;
    console.log(opponentNumber, playerNumber);
    setOpponentNumber(NewopponentNumber)
    setPlayerNumber(NewplayerNumber)
  };
  return (
    <div className="container">
      <div className="items">
        <Player player={playerNumber} />
        <Oppenent opponent={opponentNumber} />
      </div>
      <button onClick={random}>Click</button>
    </div>
  );
}

export default App;
