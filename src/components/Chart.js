import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

const initialData = {
  labels: [],
  datasets: [
    {
      label: "Employee Salary",
      data: [],
      borderWidth: 1
    }
  ]
};
class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      checkGraph: 0
    };
  }
  componentDidMount() {
    var init = {
      method: "GET",
      mode: "cors"
    };

    fetch("https://dummy.restapiexample.com/api/v1/employees", init)
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
  }
  render() {
    const { error, isLoaded, data } = this.state;
    console.log(this.state.data);
    const salaryData = [];
    const employeeNameData = [];
    for (let i of data) {
      salaryData.push(i.employee_salary);
      employeeNameData.push(i.employee_name);
    }
    console.log("SalaryData: ", salaryData);
    console.log("ChartDATA", this.state);
    console.log(initialData.datasets[0].data);
    initialData.datasets[0].data = salaryData;
    initialData.labels = employeeNameData;
    console.log("datasets", data);

    return (
      <div className="chart">
        <div>
          <h1>Charts</h1>
          <div className="box">
            <div className="box__top">Chart Data</div>
            <div className="box__content">
              <Line
                data={initialData}
                options={{
                  title: {
                    display: true,
                    text: "Employee Salary and their name",
                    fontSize: 20
                  },
                  legend: {
                    display: true,
                    position: "right"
                  }
                }}
              />
              <Bar
                data={initialData}
                options={{
                  title: {
                    display: true,
                    text: "Employee Salary and their name",
                    fontSize: 20
                  },
                  legend: {
                    display: true,
                    position: "right"
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chart;
