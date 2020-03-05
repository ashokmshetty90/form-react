import React, { Component } from "react";
import "./EmployeeList.css";

class EmployeeList extends Component {
  render() {
    const data = this.props.data;
    console.log(data);
    const header = Object.keys(data[0]);
    console.log(header);
    return (
      <div className="sam">
        <table className="table table-hover">
          <thead>
            <tr>
              {header.map(value => {
                return <th key={value}>{value}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNo}</td>
                </tr>
              );
            })}
            {/*  <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{gender}</td>
              <td>{email}</td>
              <td>{phoneNo}</td> */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeList;
