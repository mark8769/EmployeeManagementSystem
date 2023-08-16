import logo from './logo.svg';
import './App.css'; // css for footer
// https://stackoverflow.com/questions/69843615/switch-is-not-exported-from-react-router-dom
// Use Routes instead of Switch
import { BrowserRouter as Router, Route, Routes,  Switch } from 'react-router-dom'
// Router: For url paths
// Route element:
// https://www.freecodecamp.org/news/react-router-cheatsheet/#:~:text=The%20switch%20component%20looks%20through,one%20page%20at%20a%20time.
// Switch element: Ensures that only one component(page/route) will render when going through the routes.
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

// https://blog.logrocket.com/react-router-v6-guide/
function App() {
  return (
    <div>
      <Router> {/* Switches view for user? (best educated guess) */}
          <HeaderComponent /> {/* Outside of switch because header applies to all pages. */}
            <div className="container">
              {/* <Routes> */}
              <Switch>
                {/* Configure routes here. http://localhost:3000/ */}
                {/* <Route path="/" exact element={<ListEmployeeComponent/>} />
                <Route path="/employees" element={<ListEmployeeComponent/>} />
                <Route path="/addEmployee" element={<CreateEmployeeComponent/>} /> */}
                <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                <Route path = "/employees" exact component = {ListEmployeeComponent}></Route>
                {/* Pass in -1 for adding an employee, positive number for udpating an employee. */}
                <Route path = "/addEmployee/:id" exact component = {CreateEmployeeComponent}></Route>
                {/* Pass in id in url path. */}
                {/* <Route path = "/updateEmployee/:id" exact component = {UpdateEmployeeComponent}></Route> */}
              </Switch>
              {/* </Routes> */}
              {/* Get rid of this at some point (wrong way to do this) */}
            </div>
          <FooterComponent /> {/* Outside of swtich because footer applies to all pages. */}
      </Router>
    </div>
  );
}

export default App;
