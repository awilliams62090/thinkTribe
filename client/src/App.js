import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Layout/Nav"
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Mailbox from "./pages/Mailbox";
import UserCalendar from "./pages/UserCalendar";
import Todos from "./pages/Todos";
// import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/calendar" component={UserCalendar} />
          <Route exact path="/tasks" component={Todos} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/mailbox" component={Mailbox} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;