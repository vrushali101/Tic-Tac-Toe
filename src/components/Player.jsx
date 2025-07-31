import { useState } from "react";

export default function Player({ initialName, symbol,isActive,onChangeName}) {
  const [palyerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function hadnleEditClick() {
    setIsEditing((editing) => !editing);
    if(isEditing){
      onChangeName(symbol,palyerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{palyerName} </span>;
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={palyerName} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player" >
        {editablePlayerName}
        <span className="player-symbol">{symbol} </span>
      </span>
      <button onClick={hadnleEditClick}>{isEditing ? "Save" : "Edit"} </button>
    </li>
  );
}
