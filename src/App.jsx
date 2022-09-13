import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>Home page</div>} />
          <Route path='/about' element={<div>About page</div>} />
          <Route path='/cart' element={<div>Cart page</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
