import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/views/products'
import Product from './components/views/product';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Products />} path='/' />
        <Route element={<Product />} path=':productId'/>
        <Route element={<h1 className='text-purple-600'>404 NOT FOUND</h1>} path='*'/>
      </Routes>
    </Router>

  )
}

export default App;
