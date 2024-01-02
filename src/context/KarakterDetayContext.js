import React, { createContext, useState } from "react";


export const CharacterContext = createContext();

export const CharacterContextProvider = ({ children }) => {
  const [characterData, setCharacterData] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState([]);

  const value = {
    characterData,
    setCharacterData,
    selectedCharacter,
    setSelectedCharacter,
  };
  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};
