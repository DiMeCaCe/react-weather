import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <header>
        <ul className="navigation-items">
          <li className="navigation-item">
            <Link to="/">Lima</Link>
          </li>
          <li className="navigation-item">
            <Link to="/paris">Bogota</Link>
          </li>
          <li className="navigation-item">
            <Link to="/sydney">Santiago</Link>
          </li>
          <li className="navigation-item">
            <Link to="/san-francisco">Sao Paulo</Link>
          </li>
        </ul>
      </header>
    );
  }
}
