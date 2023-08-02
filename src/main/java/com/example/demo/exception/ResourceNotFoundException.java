package com.example.demo.exception;

import jakarta.annotation.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// Throw exception whenever resource(entity) is not found inside Database
// Runtime Exception internally implements serializable interface
@ResponseStatus(value= HttpStatus.NOT_FOUND) // Will return not found status to client
public class ResourceNotFoundException extends RuntimeException{

    // Serializable interface stuff.
    private static final long serialVersionUID = 1l;

    public ResourceNotFoundException(String message){
        super(message);
    }
}
