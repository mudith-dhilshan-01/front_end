
import './App.css'

import  {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Items from './pages/Items'
import Stocks from './pages/Stocks'

function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/category' element={<Category />} />
      <Route path='/item' element={<Items />} />
      <Route path='/stock' element={<Stocks />} />

    </Routes>
    </BrowserRouter>

    
  )

}

export default App
