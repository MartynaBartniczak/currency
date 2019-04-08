import React, { Component } from "react";
import { connect } from "react-redux";

class CurrencyTable extends Component {
  renderList() {
    this.props.currency.map(singleCurrency => (
      <tr>
        <td> {singleCurrency.currency}</td>
        <td> {singleCurrency.code} </td>
        <td> {singleCurrency.mid}</td>
      </tr>
    ));
  }

  render() {
    const { currency } = this.props;
    console.log(currency);
    return (
      <div style={{ marginTop: "30px" }}>
        <h4>Currencies Table</h4>
        <table className="col-6 table table-sm">
          <thead>
            <tr className="table-info">
              <th scope="col">Currency name</th>
              <th scope="col">Currency code</th>
              <th scope="col">Average exchange</th>
            </tr>
          </thead>
          {/* <tbody>{this.renderList()}</tbody> */}
        </table>
      </div>
    );
  }
}
function mapStateToProps({ currencies }) {
  return { currencies };
}

export default connect(mapStateToProps)(CurrencyTable);
