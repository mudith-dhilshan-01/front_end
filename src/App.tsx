
import './App.css'

import  {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Items from './pages/Items'
import Stocks from './pages/Stocks'
import Orders from './pages/Orders'
import CreateOrder from './pages/CreateOrder'
import AdminOrUser from './pages/AdminOrUser'
import User from './pages/User'

function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/adminOrUser' element={<AdminOrUser />} />
      <Route path='/user' element={<User />} />
      <Route path='/category' element={<Category />} />
      <Route path='/item' element={<Items />} />
      <Route path='/stock' element={<Stocks />} />
      <Route path='/order' element={<Orders />} />
      <Route path='/order/create' element={<CreateOrder />} />

    </Routes>
    </BrowserRouter>

    
  )

}

export default App
