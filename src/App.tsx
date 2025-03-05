import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ChemCalc } from "./pages/projects/ChemCalc";
import { KallCord } from "./pages/projects/KallCord"; 
import { Contact } from "./pages/Contact";
import Sidebar from "./pages/etc/Sidebar"; 

const App: React.FC = () => {

  return (
    <Router>
      <div className="container">
        <Sidebar /> 

        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects/ChemCalc" component={ChemCalc} />  {/* Rätt komponent för ChemCalc */}
            <Route path="/projects/:projectName" component={KallCord} />  {/* Fallback för andra projekt */}
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
