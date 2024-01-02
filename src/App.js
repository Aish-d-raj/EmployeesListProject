import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Profile from './Components/Profile';
import Edit from './Components/edit';

import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
     
     <Router>
				<Routes>
					<Route path="/" element={<Profile />} />
					<Route
						path="/edit"
						element={<Edit />}
					/>
          
				</Routes>
			</Router> 
    </div>
  );
}

export default App;
