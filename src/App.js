import "./styles.scss";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Box1 from "./components/box1";
import Box2 from "./components/box2";
import Table from "./components/Table";
import Chart from "./components/Chart";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (

    <div className="main">
      <Header />
      <div className="main-wrapper">
        <Sidebar />
        <div className="main-content">
          <Switch>
            <Route path="/table">
              <Table />
            </Route>
            <Route path="/chart">
              <Chart />
            </Route>
            <Route path="/">
              <Box1 />
              <Box2 />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div>
  );
}