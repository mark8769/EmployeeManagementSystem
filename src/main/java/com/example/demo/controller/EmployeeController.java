package com.example.demo.controller;

import java.util.List;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/") // Typically use v1 to denote that all rest apis are release 1
// Standard url mapping in rest api mappings
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    // This is the way AmigosCode does autowiring, doesn't look as clean
    // without the constructor that he adds. The tutorial left this out.
    public EmployeeController(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }
    //get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    // Create new employee in db rest api
    @PostMapping("/addEmployee")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    // get employee by id rest api
    // Map url param to java variable that's going to be used inside method.
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        // Throw exception. FindByID returns optional (meaning if not found, then returns nothing)
        // This results in an error.
        // Lambda Expression
        // () -> someStatemens
        Employee employee = employeeRepository.findById(id)
                .orElseThrow( () -> new ResourceNotFoundException("Employee not exist with id: " + id) );

        // Need to return Http Status(ok = 200), so need to return ResponseEntity along with Employee entity.
        // More info here: https://www.baeldung.com/spring-response-entity#:~:text=ResponseEntity%20represents%20the%20whole%20HTTP,takes%20care%20of%20the%20rest.
        return ResponseEntity.ok(employee);
    }

    // Update employee rest api
    @PutMapping("/updateEmployee/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow( () -> new ResourceNotFoundException("Employee not exist with id: " + id));

        // Update employee details with passed in employeeDetails in PUT request.
        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmailId(employeeDetails.getEmailId());

        Employee updatedEmployee = employeeRepository.save(employee);
        // Return updated employee.
        return ResponseEntity.ok(updatedEmployee);
    }
}
