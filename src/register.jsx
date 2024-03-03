import React, { Component } from "react";
import "./register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   // const { username, email, password, confirmPassword } = this.state;
  //
  //   // console.log("Registration submitted:", {
  //   //   username,
  //   //   email,
  //   //   password,
  //   //   confirmPassword,
  //   // });
  //
  //   this.setState({
  //     username: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   });
  // };

  render() {
    const { username, email, password, confirmPassword } = this.state;

    return (
      <div className="register-container">
        <h2 className="register-heading">Register</h2>
        <form
          // onSubmit={this.handleSubmit}
          className="register-form"
          action="http://localhost:5000/register"
          method="POST"
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleInputChange}
              className="form-input"
            />
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
