import React, { Component } from "react";

class Form extends Component {
  state = {
    username: "",
    password: ""
  };

  btnClicked = e => {
    e.preventDefault();
    console.log("clicked");
    const { username, password } = this.state;
    if (username === "hruday@gmail.com" && password === "hruday123") {
      this.props.history.push("/emp");
    } else {
      console.log("not valid");
      alert("enter a valid value");
    }
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    // const {
    //   data1,
    //   data2,
    //   // handleUsernameChange,
    //   // handlePasswordChange,
    //   // handleSubmit,
    //   isLoggedIn,
    //   data
    // } = this.props;
    const { password, username } = this.state;
    // if (this.props.isLoggedIn) {
    //   if (
    //     this.props.data1 === this.props.data.login.username &&
    //     this.props.data2 === this.props.data.login.password
    //   ) {
    //     console.log("success");
    //     return <Redirect to="/EmployeeList" />;
    //   } else {
    //     console.log("try again");
    //   }
    //   console.log("yes");
    //   console.log(this.props.data1, this.props.data2);
    //   console.log(
    //     this.props.data.login.username,
    //     this.props.data.login.password
    //   );
    // } else {
    //   console.log("no");
    // }

    return (
      <div className="form_bg">
        <form onSubmit={this.btnClicked}>
          <h2 className="text-center">Login Page</h2>
          <br />
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              required
              name="username"
              onChange={({ target }) => {
                const { value } = target;
                this.setState({ username: value });
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              required
              placeholder="Password"
              value={password}
              name="password"
              onChange={({ target }) => {
                const { value } = target;
                this.setState({ password: value });
              }}
            />
          </div>
          <br />
          <div className="align-center">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={this.btnClicked}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
