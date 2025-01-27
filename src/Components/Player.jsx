import React from "react";
import paper from "../img/paper.png";
import rock from "../img/rock.jpg"
import scissors from "../img/scissor.png"

function Player({ player }) {
  return (
    <div className="player-container">
      {player === 1 && <img src={paper} alt="Paper" />} 
      {player === 2 && <img src={rock} alt="Rock" />} 
      {player === 3 && <img src={scissors} alt="Scissors" />} 
    </div>
  );
}

export default Player;