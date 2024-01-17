import { useState } from "react";

export default function Player({ playerName, playerSymbol, isActive }) {
  const [playerNameInfo, setPlayerNameInfo] = useState(playerName);
  const [isEdit, setIsEdit] = useState(true);

  function handleEditButton() {
    setIsEdit((isEdit) => !isEdit);
  }

  function handleChange(event) {
    // console.log(event);
    setPlayerNameInfo(event.target.value);
  }

  let player = <span className="player-name">{playerNameInfo}</span>;
  let playerNameInput = (
    <input type="text" value={playerNameInfo} onChange={handleChange} />
  );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEdit ? player : playerNameInput}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEditButton}>{isEdit ? "Edit" : "Save"}</button>
    </li>
  );
}
