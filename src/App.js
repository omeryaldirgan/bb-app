import React, { useState }  from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Login from './pages/login'
import Preview from './pages/preview'
import PreviewItem from './pages/preview-item'
import { AuthContext } from "./context/auth";



function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <Route exact path="/" component={Preview} />
          <Route path="/login" component={Login} />
          <Route path="/:id" component={PreviewItem} />
          <PrivateRoute path="/admin" component={Login} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}
export default App;
