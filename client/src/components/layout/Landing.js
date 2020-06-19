import React, { Component } from "react";
import { BrowserRouter, Link, Router, Route } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Find</b> your {" "}
              <span style={{ fontFamily: "monospace" }}>PATH</span> to your dream job
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Want to get into tech? Want to land that software engineer job? Want to work at Google? We'll give you the path to success
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
              >
                <button style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }} className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                Register
                </button>
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
              >
                <button style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }} className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                Log In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;