import React, { Component } from "react";
import employees from "./employees.json";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";



class App extends Component {
  state = {
    employees: employees,
    search: "",
    sortOrder: "ASC",
    filteredEmployees: employees
  }
  handleInputChange = event => {
    
    const { name, value } = event.target;
    console.log(value)
    let filteredEmployees = this.employeeFilter(value)
    console.log(filteredEmployees);

    this.setState({
      [name]: value,
      filteredEmployees: filteredEmployees
    });
    
  };

  employeeFilter(name) {
    console.log("hi")
    console.log(name);
    console.log("hey")

    const filteredEmployees = employees.filter(employee => {
      console.log(employee)
      const employeeName = employee.name.toLowerCase().includes(name.toLowerCase())
      console.log(employeeName);
      return employeeName

    }

    )
    this.setState({ filteredEmployees: filteredEmployees })
    return filteredEmployees;

  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.employeeFilter(event.target.value);
  };
  render() {

    return (
      <>
        <Header />
        <Search handleInputChange={this.handleInputChange} value={this.state.search} handleFormSubmit={this.handleFormSubmit} />
        <table className="table table-sm table-dark mx-5 ">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Date of Birth</th>
            </tr>
          </thead>
          {this.state.filteredEmployees.map((employee) => {
            console.log(JSON.stringify(employee))
            return (
              <Table employees={employee} />
            )
          })
          }
        </table>




      </>

    );
  }
}

export default App;
