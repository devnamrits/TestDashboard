import React, { Component } from "react";
import "./views/table.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }
  componentDidMount() {

    fetch("https://dummy.restapiexample.com/api/v1/employees", {
      method: 'GET',
      mode: 'cors'
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    //console.log('Data: ', this.state.data);
  }
  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Employee Details</h1>
          <div className="box">
            <div className="box__top">Employee Table</div>
            <div className="box__content">
              <table id="employeeTable">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                {data.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.employee_name}</td>
                    <td>{item.employee_salary}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Table;
