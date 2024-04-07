import React from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Table from "./Table"
import Login from "./Login"
import Register from "./Register"
import Chart from './Chart'
import "./App.css"


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
    </div>
  )
}

export default App