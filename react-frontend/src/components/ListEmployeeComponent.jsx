import React, { Component } from 'react'

class ListEmployeeComponent extends Component {
    // Props are being passed to super class (Component)
    constructor(props) {
        super(props)

        this.state ={
            employees: []
        }
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
                    <table clasName="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee</th>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Action</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }
}