import React, { Component } from 'react'
import ListEmployeeComponent from './ListEmployeeComponent';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component{
    constructor(props) {
        super(props)

        // These properties will help us get the form data.
        // These "instance variables" will have setters and getters you don't need to define.
        // I am assuming these are implemented in the Component class we are extending.
        this.state = {
            firstName: "",
            lastName: "",
            emailId: ""
        }
        
        // Have to bind our event handler functions to our component inside the constructor.
        // Also recommended way by react foundation.
        // Although class components barely used anymore.
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
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
    saveEmployee = (e) => {
        e.preventDefault();
        
        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId
        };
        console.log("Employee " + JSON.stringify(employee));
        // Returns promise, so use 'then'
        EmployeeService.createEmployee(employee).then(res => {
            this.props.history.push("/employees");
            window.location.reload();
        });

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
                            <h3 className="text-center">Employee</h3>
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
                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
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

export default CreateEmployeeComponent