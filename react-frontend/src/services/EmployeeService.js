import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/"
const EMPLOYEE_API_ADD = "http://localhost:8080/api/v1/addEmployee"

class EmployeeService {

    // Returning results from get api call.
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL + "employees");
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_ADD, employee);
    }
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + "employees/" + employeeId)
    }
    updateEmployee(employee, id){
        // Return a promise
        return axios.put(EMPLOYEE_API_BASE_URL + `updateEmployee/${id}`, employee);
    }
    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL + `deleteEmployee/${id}`);
    }
}

// Exporting object of class (denoted by new keyword)
// Not exposting the whole class.
export default new EmployeeService();