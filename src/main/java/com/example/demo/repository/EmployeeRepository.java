package com.example.demo.repository;

import com.example.demo.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

// Extending JpaRepository exposes database core methods to use for accessing our repo.
// E.g. Delete, Add, Update, Insert, FindAll, FindById, saveall, existsById, etc...
// Allows for out of the box implementations, no boiler plate code to do this.
// Pass in the Entity you want to use, and the Type being used for the entity id
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
