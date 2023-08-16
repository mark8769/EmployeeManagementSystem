import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export default class ListEmployeeComponent extends Component {
    // Props are being passed to super class (Component)
    constructor(props) {
        super(props)

        this.state ={
            employees: []
        }
        // Binding addEmployee method
        // this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    editEmployee(id){
        //console.log("Something is wrong here")
        this.props.history.push(`/addEmployee/${id}`)
        window.location.reload();
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
    // I guess this is how you define functions inside class components.
    addEmployee(){
        // https://codesource.io/how-to-use-this-props-history-push-on-your-react-project/
        // From configured BrowserRouter in app.js
        // Have configured routes. 
        // Passes history object through props for each route.
        // History object lets us manually configure the history in the browser.

        // Can only be called from functional components in react (something about hooks and not needing class components anymore)
        // this.props.history.push("/addEmployee");
        // let navigate = useHistory();
        this.props.history.push("/addEmployee/-1");
        window.location.reload() // This is a quick fix, not sure why the page isn't re-rendering....
        // this.props.navigate("/addEmployee")
    }
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( (res) => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)})
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
                    <button className="btn btn-primary" onClick={this.addEmployee.bind(this)}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr> 
                                <th>Employee</th>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Actions</th>
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
                                        {/* */}
                                        <td>
                                            <button onClick={ () => this.editEmployee(employee.id) } className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}}onClick={ () => this.deleteEmployee(employee.id) } className="btn btn-danger">Delete</button>
                                        </td>
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