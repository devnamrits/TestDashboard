import React from "react";
import { Link } from "react-router-dom";
import "./views/sidebar.scss";

export default () => (
  <div className="main-sidebar main-sidebar--dark">
    <div className="main-sidebar__box">
      <h3>Dashboard</h3>
      <ul>
        <li>
          <Link to="" onClick={console.log("Clicked")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/table">Employee Details</Link>
        </li>
        <li>
          <Link to="/chart">Chart</Link>
        </li>
      </ul>
    </div>
    <div className="main-sidebar__box">
      <h3>DummyList</h3>
      <ul>
        <li>
          <Link to="">Something</Link>
        </li>
        <li>
          <Link to="">Something</Link>
        </li>
      </ul>
    </div>
  </div>
);
