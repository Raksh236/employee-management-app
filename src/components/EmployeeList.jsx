import React from "react";
import EmployeeRow from "./EmployeeRow";

const mockEmployees = [
  { id: 1, name: "Alice", role: "Engineer", department: "R&D" },
  { id: 2, name: "Bob", role: "Manager", department: "HR" },
  { id: 3, name: "Charlie", role: "Designer", department: "UX" },
];

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: mockEmployees,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    const updatedList = this.state.employees.filter((emp) => emp.id !== id);
    this.setState({ employees: updatedList });
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map((emp) => (
            <EmployeeRow
              key={emp.id}
              employee={emp}
              onDelete={this.handleDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default EmployeeList;
