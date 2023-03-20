import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Category } from "../Category";
import { Register } from "../Register";
import { Login } from "../Login";
import { Cart } from "../Cart";
export function RouterInProgect() {
  return (
    <Router>
      <div className="RouterInProgect">
        <Link to="Register">Register -</Link>
        <Link to="Category">Category - </Link>
        <Link to="Login"> Login</Link>
        <Link to="Cart">Cart</Link>
      </div>
      <Route>
        <Route path="/Register">
          <Register />
        </Route>
      </Route>

      <Route>
        <Route path="/Category">
          <Category />
        </Route>
      </Route>


      <Route>
        <Route path="/Cart">
          <Cart />
        </Route>
      </Route>

      <Route>
        <Route path="/Login">
          <Login />
        </Route>
      </Route>
    </Router>
  );
}
