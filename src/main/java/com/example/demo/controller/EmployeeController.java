package com.example.demo.controller;

import java.util.List;
import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
}
