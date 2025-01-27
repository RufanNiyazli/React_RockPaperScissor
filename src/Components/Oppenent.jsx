import React from "react";
import paper from "../img/paper.png";
import rock from "../img/rock.jpg";
import scissors from "../img/scissor.png";
function Oppenent({ opponent }) {
  return (
    <div className="opponent-container">
      {opponent === 1 && <img src={paper} alt="Paper" />}
      {opponent === 2 && <img src={rock} alt="Rock" />}
      {opponent === 3 && <img src={scissors} alt="Scissors" />}
    </div>
  );
}

export default Oppenent;
