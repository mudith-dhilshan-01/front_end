
import './App.css'

import  {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Items from './pages/Items'

function App() {

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/category' element={<Category />} />
      <Route path='/item' element={<Items />} />
    </Routes>
    </BrowserRouter>

    
  )

}

export default App
