import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCurrency } from "../actions/index";

export class DataSearch extends Component {
  constructor(props) {
    super(props);

    this.state = { date: "" };
    this.dateChange = this.dateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  dateChange(event) {
    console.log(event.target.value);
    this.setState({ date: event.target.value });
  }

  handleSubmit(event) {
    const date = event.target.value;
    event.preventDefault();
    this.props.fetchCurrency(date);
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
                id="data-picker"
                value={this.state.date}
                onChange={this.dateChange}
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

export default connect(
  null,
  mapDispatchToProps
)(DataSearch);
