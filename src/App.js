import { Redirect, Route, Switch } from "react-router-dom";
import React, { lazy, useEffect } from "react";
import "./App.scss";
import SideBar from "./components/SideBar";
import SnackbarCustom from "./components/SnackbarCustom";
import BackdropLoading from "./components/BackdropLoading";
import NoteSpace from "./feature/NoteSpace";
import { Suspense } from "react";
import DialogBox from "./components/DialogBox";

const BookStore = lazy(() => import("./feature/BookStore"));
const BookDetail = lazy(() => import("./feature/BookDetail"));
const ReadingSpace = lazy(() => import("./feature/ReadingSpace"));
const AccountDetailFeature = lazy(() => import("./feature/AccountDetail"));
const Login = lazy(() => import("./feature/Login"));
const Bookcase = lazy(() => import("./feature/Bookcase"));
const Pomodoro = lazy(() => import("./feature/Pomodoro"));

function App() {
  return (
    <div className="App">
      <Route
        render={({ location }) =>
          ["/login"].includes(location.pathname) ? null : <SideBar />
        }
      />
      <Suspense fallback={<BackdropLoading />}>
        <Switch>
          <Redirect from="/" to="/bookstore" exact />
          <Route path="/login" component={Login} exact />
          <Route path="/bookstore" component={BookStore} />
          <Route path="/book-detail/:id" component={BookDetail} exact />
          <Route path="/reading-space" component={ReadingSpace} />
          <Route path="/note-space/:id" component={NoteSpace} exact />
          <Route path="/account" component={AccountDetailFeature} exact />
          <Route path="/bookcase" component={Bookcase} exact />
          <Route path="/pomodoro" component={Pomodoro} exact />
        </Switch>
      </Suspense>

      {/* NOTE: snackbar */}
      <SnackbarCustom />
      <BackdropLoading />
      <DialogBox />
    </div>
  );
}

export default App;
