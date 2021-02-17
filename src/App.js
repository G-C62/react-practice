import { useContext } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import {AuthContext} from './Context/AuthContext';
import Login from './Component/Login';
import Home from './Component/Home';


function App() {
  
  const { auth } = useContext(AuthContext);

  return (
    <>
      <Router>
        {
          //auth가 없으면 login
        }
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/home" component={Home}></Route>
      </Router>
    </>
  );
}

export default App;
