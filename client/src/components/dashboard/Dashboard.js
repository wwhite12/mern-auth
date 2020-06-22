import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Card from "../cards/Card"
import "./dashboard.css"

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh"}} className="container">
        <div className="row">
          <div className="col s12 right-align">
            <h6 style={{color:"white"}}> 
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text white-text text-darken-1">
                Welcome to {" "}
                <span style={{ fontFamily: "monospace" }}>Clairvoyance</span>  👏
              </p>
            </h6>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="row">
        <div className="col s12 left-align">
            <Card />
        </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);