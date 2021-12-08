import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import BookStore from "./feature/BookStore";
import BookDetail from "./feature/BookDetail";
import ReadingSpace from "./feature/ReadingSpace";
import AccountDetailFeature from "./feature/AccountDetail";
import Login from "./feature/Login";
import Bookcase from "./feature/Bookcase";
import Pomodoro from "./feature/Pomodoro";

function App() {
  return (
    <div className="App">
      <Route
        render={({ location }) =>
          ["/login"].includes(location.pathname) ? null : <SideBar />
        }
      />
      <Switch>
        <Redirect from="/" to="/bookstore" exact />
        <Route path="/login" component={Login} exact />
        <Route path="/bookstore" component={BookStore} exact />
        <Route path="/book-detail/:id" component={BookDetail} exact />
        <Route path="/reading-space" component={ReadingSpace} exact />
        <Route path="/account" component={AccountDetailFeature} exact />
        <Route path="/bookcase" component={Bookcase} exact />
        <Route path="/pomodoro" component={Pomodoro} exact />
      </Switch>
    </div>
  );
}

export default App;
