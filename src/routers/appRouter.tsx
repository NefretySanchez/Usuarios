import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import CreateUserView from "../views/CreateUserView";
import Error404View from "../views/Error404View";
import LoginView from "../views/LoginView";
import UsersView from "../views/UsersView";

const AppRouter = () => {
  let loginAccess = null;
  if (localStorage.getItem("token") !== undefined) {
    loginAccess = localStorage.getItem("token");
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginView}></Route>
        <Route exact path="/ingreso" component={LoginView}></Route>
        <Route exact path="/usuarios">
          {loginAccess !== null ? <UsersView /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/crear">
          {loginAccess !== null ? <CreateUserView /> : <Redirect to="/" />}
        </Route>
        <Route path="*" component={Error404View}></Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
