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
            id: this.props.match.params.id,
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
    /*
        If -1 is passed then we leave our form empty.
        Meaning we want to add/create a new employee into the database.
        Else if an id was passed, then we want to update a 
        current employees information. Fill in the form with 
        respective employee info to update.
    */
    componentDidMount(){
        if (this.state.id == -1){
            return
        }else{
            // Axis methods return a "promise" Javascript nuance, so have to catch with then "when response returns"
            EmployeeService.getEmployeeById(this.state.id).then( (res) => {
                let employee = res.data;
                this.setState({firstName: employee.firstName, 
                    lastName: employee.lastName,
                    emailId: employee.emailId
                })
            });
        }
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
    /*
        Either updating an employee or creating a new employee based on id passed.
    */
    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {
            id: this.props.match.params.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId
        };
        console.log("Employee " + JSON.stringify(employee));

        if (this.state.id == -1){
            // Returns promise, so use 'then'
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push("/employees");
                window.location.reload();
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( (res) => {
                console.log("Employee updated.");
                this.props.history.push("/employees");
                window.location.reload();
            });
        }
    }
    cancel(e){
        // Dont want params to be passed into url. Also prevents reload (when form is submitted, sigh....)
        // Might as well learn how to use functional components, managing state in class components seems like a hassle.
        // And no more updates for it anyway....
        e.preventDefault(); 
        // Navigate to employees page
        this.props.history.push("/employees");
        window.location.reload();
    }
    getTitle(){
        // Can also return HTML without any weird syntax
        // E.g. return <h3 className="text-center">Add Employee</h3>
        if (this.state.id == -1){
            return "Add Employee";
        }else{
            return "Update Employee";
        }
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {/* In JSX can intermix Javascript inline inside html */}
                            <h3 className="text-center">{this.getTitle()}</h3>

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