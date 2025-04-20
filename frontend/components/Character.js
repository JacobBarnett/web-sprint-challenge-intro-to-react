import React from "react";
import { useState } from "react";

function Character({ name, homeworld }) {
  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld((prev) => !prev);
  };

  return (
    <div className="character-card" onClick={toggleHomeworld}>
      <h3 className="character-name">{name}</h3>
      {showHomeworld && <p className="character-planet">Planet: {homeworld}</p>}
    </div>
  );
}

export default Character;
