import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Main from './pages/Main'
import Cart from './pages/Cart'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default App
