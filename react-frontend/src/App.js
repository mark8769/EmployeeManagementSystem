import logo from './logo.svg';
import './App.css'; // css for footer
// https://stackoverflow.com/questions/69843615/switch-is-not-exported-from-react-router-dom
// Use Routes instead of Switch
import { BrowserRouter as Router, Route, Routes, createBrowserRouter } from 'react-router-dom'
// Router: For url paths
// Route element:
// https://www.freecodecamp.org/news/react-router-cheatsheet/#:~:text=The%20switch%20component%20looks%20through,one%20page%20at%20a%20time.
// Switch element: Ensures that only one component(page/route) will render when going through the routes.
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

// https://blog.logrocket.com/react-router-v6-guide/
function App() {
  return (
    <div>
      <Router> {/* Switches view for user? (best educated guess) */}
          <HeaderComponent /> {/* Outside of switch because header applies to all pages. */}
            <div className="container">
              <Routes>
                {/* Configure routes here. http://localhost:3000/ */}
                <Route path="/" exact element={<ListEmployeeComponent/>} />
                <Route path="/employees" element={<ListEmployeeComponent/>} />
                <Route path="/addEmployee" element={<CreateEmployeeComponent/>} />
              </Routes>
              {/* Get rid of this at some point (wrong way to do this) */}
            </div>
          <FooterComponent /> {/* Outside of swtich because footer applies to all pages. */}
      </Router>
    </div>
  );
}

export default App;
