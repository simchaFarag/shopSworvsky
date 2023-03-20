import logo from "../components/assets/סווארובסקי.jpg";
import "../stylePages/Layout.css";
import { RouterInProgect } from "./Router/RouterInProgect";


export function Layout() {
  return (
    <>
      <header>
        <img src={logo} width="200" height="200" />

        <RouterInProgect />
      </header>
      <main className="main"></main>
      <br />
      <aside>
        
      </aside>
    </>
  );
}
