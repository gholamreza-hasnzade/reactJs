import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/views/products'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Products />} path='/' />
      </Routes>
    </Router>

  )
}

export default App;
