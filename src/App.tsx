import React from "react";
import "./App.css";
import PageContainer from "./components/PageContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <PageContainer />
    </div>
  );
};

export default App;
