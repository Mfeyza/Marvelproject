import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const CharacterContext = createContext();

export const CharacterContextProvider = ({ children }) => {
  const [characterData, setCharacterData] = useState(null);

  return (
    <CharacterContext.Provider value={{ characterData, setCharacterData }}>
      {children}
    </CharacterContext.Provider>
  );
};