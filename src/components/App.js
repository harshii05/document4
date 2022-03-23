import React from "react"
import Signup from "./authentication/Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Profile from "./authentication/Profile"
import Login from "./authentication/Login"
import PrivateRoute from "./authentication/PrivateRoute"
import Dashboard from "./documents/Dashboard"
// require('dotenv').config()

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Drive */}
         <PrivateRoute exact path="/" component={Dashboard} />
         <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />

            {/* Profile */}
            <PrivateRoute path="/user" component={Profile} />

          {/* Auth */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App