import React from "react";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <ChatArea />
      </div>
    </div>
  );
}

export default App;
