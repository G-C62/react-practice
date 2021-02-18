import { useContext } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import AuthContext from './Context/AuthContext';
import Login from './Component/Login';
import Home from './Component/Home';


function App() {
  
  const { auth } = useContext(AuthContext);

  return (
    <>
      <Router>
        <Route component={Login} path="/login" exact />
        {
          auth ? <Redirect to="login" /> : <Home />
        }
      </Router>
    </>
  );
}

export default App; 
