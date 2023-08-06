import logo from './logo.svg';
import './App.css'; // css for footer
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Router: For url paths
// Route element:
// https://www.freecodecamp.org/news/react-router-cheatsheet/#:~:text=The%20switch%20component%20looks%20through,one%20page%20at%20a%20time.
// Switch element: Ensures that only one component(page/route) will render when going through the routes.
import   ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router> {/* Switches view for user? (best educated guess) */}
        <div className="container">
          <HeaderComponent /> {/* Outside of switch because header applies to all pages. */}
            <div className="container">
              <Switch>
                {/* Configure routes here. http://localhost:3000/ */}
                <Route path="/" component={ListEmployeeComponent}></Route>
                <Route path="/employees" component={ListEmployeeComponent}></Route>
                <ListEmployeeComponent />
              </Switch>
            </div>
          <FooterComponent /> {/* Outside of swtich because footer applies to all pages. */}
        </div>
      </Router>
    </div>
  );
}

export default App;
