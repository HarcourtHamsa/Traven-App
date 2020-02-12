import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid">
          <div className="container center-object">
            <p className="display-4">Hi, I am Harcourt Hamsa</p>
            <small>
              I build things on the web & love humanity{" "}
              <i className="fa fa-heart text-danger"></i>
            </small>

            <div>
              <a href="/" className="btn btn-outline-primary mt-4">
                Let's talk <i className="fa fa-send text-danger"></i>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
