import React from "react";
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { CharacterContextProvider } from "./context/KarakterDetayContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <CharacterContextProvider>
          <AppRouter />
          <ToastContainer />
        </CharacterContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
