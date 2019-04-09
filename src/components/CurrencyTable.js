import React, { Component } from "react";
import { connect } from "react-redux";

class CurrencyTable extends Component {
  // renderList(choosenDate) {
  //   const currencyName = choosenDate.list.map(currency => currency.currency);
  //   const currencyCode = choosenDate.list.map(currency => currency.code);
  //   const currencyMid = choosenDate.list.map(currency => currency.mid);
  //   return (
  //     <tr key={currencyName}>
  //       <td> {currencyName}</td>
  //       <td> {currencyCode} </td>
  //       <td> {currencyMid}</td>
  //     </tr>
  //   );
  // }

  render() {
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
          {/* <tbody>{this.props.currencies.map(this.renderList)}</tbody> */}
        </table>
      </div>
    );
  }
}
function mapStateToProps({ currencies }) {
  // console.log(currencies, 'currencies');
  return { currencies };
}

export default connect(mapStateToProps)(CurrencyTable);
