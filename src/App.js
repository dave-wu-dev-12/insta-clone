import React from "react";
import "./App.css";
import database from "./firebase";
import Header from "./Header";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      <Header />
      <Post />
    </div>
  );
}

export default App;
