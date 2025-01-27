import { useState } from "react";
import "./App.css";
import Player from "./Components/Player";
import Oppenent from "./Components/Oppenent";

function App() {
  const [playerNumber, setPlayerNumber] = useState(1);
  const [opponentNumber, setOpponentNumber] = useState(1);

  const random = () => {
    const NewopponentNumber = Math.floor(Math.random() * 3) + 1;
    const NewplayerNumber = Math.floor(Math.random() * 3) + 1;
    // console.log(opponentNumber, playerNumber);
    setOpponentNumber(NewopponentNumber);
    setPlayerNumber(NewplayerNumber);
    winnerCheck()
  };
  const winnerCheck = () => {
    if (
      (playerNumber === 1 && opponentNumber === 3) ||
      (playerNumber === 2 && opponentNumber === 1) ||
      (playerNumber === 3 && opponentNumber === 2)
    ) {
      alert("Opponent wind")
    }
    else{
      alert("Player wins")
    }
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
