
import Login from "./components/User/Login-signin/login"
import Hehe from "./components/User/index"
import Hehehe from "./components/User/index2"
import Card from "./components/User/card"
import Load from "./components/User/loading"
import Nav from "./components/User/Navbar"
import Side from "./components/User/Sidebar"
import Menu from "./components/User/Menu"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Admin from "./components/Admin/Admin"

export default function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
    </div>
  )
}
