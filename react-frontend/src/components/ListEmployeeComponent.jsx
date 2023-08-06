import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export default class ListEmployeeComponent extends Component {
    // Props are being passed to super class (Component)
    constructor(props) {
        super(props)

        this.state ={
            employees: []
        }
    }
    /*
        "Called immediately after component is mounted.
        Setting state here will cause re-rendering."
        Best place to call a rest api.
    */
    componentDidMount(){
        // Making api call through service layer component.
        EmployeeService.getEmployees().then((response) => {
            this.setState({ employees: response.data })
        });
    }
    render(){
        // JSX code, Similar to Jinja
        // className: In react use "className" instead of "class" like html, then specify class name.
        return(
            // JSX code, cant write comments from inside?
            // React required JSX to have surrounding element. In this case our div tag.
            // The classes inside are Bootstrap classes that we installed.
            // I think another popular one to use would be Material UI.
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr> 
                                <th>Employee</th>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Make api call to fill this in. 
                                Here we are dynamically adding the employees to the website.
                                The map() function is an ES6 feature in Javascript.
                            */}
                            
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key={employee.id}>
                                        <td>{ employee.firstName }</td>
                                        <td>{ employee.lastName }</td>
                                        <td>{ employee.emailId }</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}