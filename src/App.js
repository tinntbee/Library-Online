import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import SideBar from "./Components/SideBar";
import BookStore from "./Feature/BookStore";
import BookDetail from "./Feature/BookDetail";
import ReadingSpace from "./Feature/ReadingSpace";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Switch>
        <Redirect from="/" to="/bookstore" exact />
        <Route path="/bookstore" component={BookStore} exact />
        <Route path="/book-detail" component={BookDetail} exact />
        <Route path="/reading-space" component={ReadingSpace} exact />
      </Switch>
    </div>
  );
}

export default App;
