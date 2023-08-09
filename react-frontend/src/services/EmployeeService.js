import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees"
const EMPLOYEE_API_ADD = "http://localhost:8080/api/v1/addEmployee"
class EmployeeService {

    // Returning results from get api call.
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_ADD, employee);
    }
}

// Exporting object of class (denoted by new keyword)
// Not exposting the whole class.
export default new EmployeeService();