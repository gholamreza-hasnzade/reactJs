import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Products from './components/views/products'

const App = () => {
  return (
    <Router>
    <Routes>
      <Route element={<Products />} path='/' />
    </Routes>
    </Router>
  )
}

export default App
