import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   // const { username, password } = this.state;
  //
  //   // console.log("Login submitted:", { username, password });
  //
  //   this.setState({
  //     username: "",
  //     password: "",
  //   });
  // };

  render() {
    const { username, password } = this.state;

    return (
      <div className="login-container">
        <h2 className="login-heading">Login</h2>
        <form
          action="http://localhost:5000/login"
          method="POST"
          className="login-form"
        >
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="USERNAME"
              value={username}
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
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
