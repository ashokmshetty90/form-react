import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import logindata from "./data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmployeeList from "./Component/EmployeeList";
import employeeList from "./employeeList";

class App extends Component {
  state = {
    data: logindata,
    employeeListdata: employeeList,
    data1: "",
    data2: "",
    isLoggedIn: false
  };
  handleUsernameChange = e => {
    this.setState({
      data1: e.target.value
    });
  };
  handlePasswordChange = e => {
    this.setState({
      data2: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
    console.log("loggdin");
  };

  render() {
    const empdata = this.state.employeeListdata.user;
    //const header = Object.keys(data[0]);
    /*     if (this.state.isLoggedIn) {
      if (
        this.state.data1 === this.state.data.login.username &&
        this.state.data2 === this.state.data.login.password
      ) {
        console.log("success");
        window.location.href = "EmployeeList.js";
      } else {
        console.log("try again");
      }
      console.log("yes");
      console.log(this.state.data1, this.state.data2);
      console.log(
        this.state.data.login.username,
        this.state.data.login.password
      );
    } else {
      console.log("no");
    } */
    return (
      // <BrowserRouter>
      //   <div className="container">
      //     <div className="row">
      //       <Form
      //         isLoggedIn={this.state.isLoggedIn}
      //         data={this.state.data}
      //         data1={this.state.value}
      //         data2={this.state.value}
      //         handleUsernameChange={this.handleUsernameChange}
      //         handlePasswordChange={this.handlePasswordChange}
      //         handleSubmit={this.handleSubmit}
      //       />
      //     </div>
      //   </div>
      //   {this.state.isLoggedIn ? (
      //     <Route to="/EmployeeList">Login</Route>
      //   ) : (
      //     <Form />
      //   )}
      // </BrowserRouter>
      <Router>
        <Switch>
          <Route exact path="/" render={props => <Form {...props} />} />
          <Route path="/emp">
            <div className="col-lg-6 mx-auto section ">
              <h2 className="my-2">EmployeeList Page</h2>
              <EmployeeList data={empdata} />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
