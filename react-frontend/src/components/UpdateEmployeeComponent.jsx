import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component{
    constructor(props) {
        super(props)

        // These properties will help us get the form data.
        // These "instance variables" will have setters and getters you don't need to define.
        // I am assuming these are implemented in the Component class we are extending.
        this.state = {
            // I am guessing this grabs the values from the url params(route).
            id: this.props.match.params.id,
            firstName: "",
            lastName: "",
            emailId: ""
        }
        console.log(this.state);
        // Have to bind our event handler functions to our component inside the constructor.
        // Also recommended way by react foundation.
        // Although class components barely used anymore.
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }
    /*
    componentDidMount is the final step of the mounting process. 
    Using the componentDidMount() method, we can execute the 
    React code when the component has already been placed in the
    DOM (Document Object Model). It is used for handling for handling 
    all network requests and setting up subscriptions.
     */

    /* 
    Here we are Grabbing the "Employee" we want to update.
    We call out backend, and once DOM is loaded (similar to: window.addEventListener("DOMContentLoaded", main);)

    */
    componentDidMount(){
        // Axis methods return a "promise" Javascript nuance, so have to catch with then "when response returns"
        EmployeeService.getEmployeeById(this.state.id).then( (res) => {
            let employee = res.data;
            this.setState({firstName: employee.firstName, 
                lastName: employee.lastName,
                emailId: employee.emailId
            })
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        
        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId
        };
        console.log("Employee " + JSON.stringify(employee));
        //EmployeeService.updateEmployee()
        EmployeeService.updateEmployee(employee, this.state.id).then( (res) => {
            console.log("Employee updated.");
            this.props.history.push("/employees");
            window.location.reload();
        });
        
    }

    // Using an arrow function. Look into these a little bit more.
    // Also notice the lack of this.instance_function like in Python. Blend of Java and Python
    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailIdHandler = (event) => {
        this.setState({emailId: event.target.value});
    }
    cancel(){
        // Navigate to employees page
        this.props.history.push("/employees");
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div className='card-body"'>
                                <form>
                                    <div className='form-group'>
                                         <label>First Name: </label>
                                         <input placeholder='First Name' name="firstName" 
                                         className="form-control" 
                                         value={this.state.firstName} 
                                         onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                         <label>Last Name: </label>
                                         <input placeholder='Last Name' name="lastName" 
                                         className="form-control" 
                                         value={this.state.lastName} 
                                         onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                         <label>Email Id: </label>
                                         <input placeholder='Email Address' name="emailAddress" 
                                         className="form-control" 
                                         value={this.state.emailId} 
                                         onChange={this.changeEmailIdHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent