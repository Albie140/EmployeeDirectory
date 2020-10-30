import React, { Component } from "react";
import employees from "./employees.json";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = {
    employees: employees,
    search: "",
    sortOrder: "ASC",
    filteredEmployees: []
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.employeeFilter(value)


    this.setState({
      [name]: value
    });
  };

  employeeFilter(name) {
    console.log(name);
    const filteredEmployees = employees.filter(employee => {
      const employeeName = employee.name.includes(name)
      console.log(employeeName);
      if (employeeName) {
        return employeeName
      }
      return employeeName
    }

    )
    this.setState({ filteredEmployees: filteredEmployees })

  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.employeeFilter(this.state.search);
  };
  render() {

    return (
      <>
        <Header />
        <Search handleInputChange = {this.handleInputChange} value={this.state.search}/>
        <table className="table table-sm table-light mx-5 ">
          <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">Date of Birth</th>
          </tr>
          </thead>
          {this.state.employees.map((employee) => {
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
