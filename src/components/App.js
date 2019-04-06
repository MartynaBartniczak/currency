import React, { Component } from "react";
import CurrencyTable from "./CurrencyTable";
import DataSearch from "./DataSearch";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <DataSearch />
        <CurrencyTable />
      </div>
    );
  }
}
