import { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const onClickHandler = () =>{
    setIsEditing(prev => !prev)
  }

  return (
    <li>
      <span className="player">
        {!isEditing ? <span className="player-name">{name}</span> :
        <input type="text" required></input>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onClickHandler}>Edit</button>
    </li>
  );
};

export default Player;
