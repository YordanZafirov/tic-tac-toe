import { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const onClickHandler = () => {
    setIsEditing((prev) => !prev);
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}></input>;
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onClickHandler}>{btnCaption}</button>
    </li>
  );
};

export default Player;
