import React from "react";
import paper from "../img/paper.png";
function Player({player}) {
  return (
    <div className="player-container">
      <img src={paper} alt="" />
      {
        player
      }
    </div>
  );
}

export default Player;
