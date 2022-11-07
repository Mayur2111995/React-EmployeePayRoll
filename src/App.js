import { BrowserRouter as Router, Switch,Routes,Route} from "react-router-dom";
import './App.css';
import Home from "../src/components/home/home";
import PayrollForm from "../src/components/payroll-form/payroll-form";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
          <Route path="/home"><Home/></Route>
          <Route path="/employee"><PayrollForm/></Route>
          <Route path="/EmployeeForm/:id"><PayrollForm/></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;