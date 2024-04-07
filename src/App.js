import React from 'react'
import { Routes, Route } from "react-router-dom"
import Footer from './components/Footer';
import Dashboard from "./Dashboard"
import Table from "./Table"
import Login from "./Login"
import Register from "./Register"
import Chart from './Chart'
import "./App.css"
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Dashboard/> } />
        <Route path="/Table" element={ <Table/> } />
        <Route path="/Chart" element={ <Chart/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App