import React, { Component } from "react";
import { connect } from "react-redux";

class SampleComponent extends Component {
  render() {
    const { currency } = this.props;

    return (
      <div style={{ marginTop: "30px" }}>
        <h4>Currency Table</h4>
        <table className="col-6 table table-sm">
          <thead>
            <tr className="table-info">
              <th scope="col">Currency name</th>
              <th scope="col">Currency code</th>
              <th scope="col">Average exchange</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> USD </td>
              <td>1 USD </td>
              <td> 0,1199</td>
            </tr>
            <tr>
              <td> AUD </td>
              <td>1 AUD </td>
              <td> 2,7231</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
function mapStateToProps({ currency }) {
  return { currency };
}

export default connect(mapStateToProps)(SampleComponent);
