import React, { Component } from "react";

export default class Footer extends Component {
  state = {};

  render() {
    return (
      <div className="bg-primary text-white p-3 mt-3">
        <div>
          <i className="fa fa-github h4 m-2"></i>
          <i className="fa fa-twitter h4 m-2"></i>
          <i className="fa fa-facebook h4 m-2"></i>
        </div>
        <p>Email: hamsaharcourt@gmail.com</p>
        <p>Phone: +2348075339205</p>
        <p>Copyright &copy; of Harcourt Hamsa 2020</p>
      </div>
    );
  }
}
