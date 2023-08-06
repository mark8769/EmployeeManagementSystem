import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees"
class EmployeeService {

    // Returning results from get api call.
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

// Exporting object of class (denoted by new keyword)
// Not exposting the whole class.
export default new EmployeeService();