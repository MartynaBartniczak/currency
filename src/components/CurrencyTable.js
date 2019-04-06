import React, { Component } from "react";
import { connect } from "react-redux";

class SampleComponent extends Component {
  render() {
    const { currency } = this.props;

    return <div>Data from Redux: {currency}</div>;
  }
}
function mapStateToProps({ currency }) {
  return { currency };
}

export default connect(mapStateToProps)(SampleComponent);
