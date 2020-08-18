import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css'


// importing pages
import Index from "./pages/Index"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Thome from "./pages/Thome"



const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/thome" component={Thome} />
    </Router>
  )
}

export default App
