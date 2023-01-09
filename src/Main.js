import React, { Component } from "react";
import { Route } from "react-router-dom";
import Weather from "./Weather";

export default class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact={true}
          path="/"
          render={() => (
            <div className="App">
              <Weather city="lima" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/bogota"
          render={() => (
            <div className="App">
              <Weather city="Bogota" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/santiago"
          render={() => (
            <div className="App">
              <Weather city="Santiago" />
            </div>
          )}
        />
        <Route
          exact={true}
          path="/sao-paulo"
          render={() => (
            <div className="App">
              <Weather city="Sao Paulo" />
            </div>
          )}
        />
      </div>
    );
  }
}
