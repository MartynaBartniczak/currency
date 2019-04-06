import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { fetchCurrency } from "../actions/index";

export class DataSearch extends Component {
  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather("2016-03-30");
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="type a date in format RRRR-MM-DD" />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCurrency }, dispatch);
}

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(DataSearch);
