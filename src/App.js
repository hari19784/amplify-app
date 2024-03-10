import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Building from "./components/Buildings/Building";
import { GetData1 } from "./GraphQL";
import LoginPage from "./Loginpage";

function App({ signOut }) {  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/AllBuildings" component={Building} />
          <Route exact path="/ObjectFamily/:SiteID" component={GetData1} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;