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
          <div className="form-row">
            <label className="col-form-label">Date</label>

            <div className="col-6">
              <input
                className="form-control"
                data-date-format="yyyy/mm/dd"
                type="date"
                value=""
                id="data-picker"
              />
            </div>

            <button type="submit" className="btn btn-info">
              Check
            </button>
          </div>
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
