import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import TodosCompleted from "./pages/TodosCompleted";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Todo} />
        <Route exact path="/todos" component={Todo} />
        <Route exact path="/completed-todos" component={TodosCompleted} />
      </div>
    </Router>
  );
}

export default App;
// <Route component={NoMatch} />
