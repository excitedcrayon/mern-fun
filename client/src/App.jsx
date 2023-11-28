import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Category from './pages/Category';
import Task from './pages/Task';

function App() {

  return (
    <div id="mernApp">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/category' element={ <Category/> } />
          <Route path='/' element={ <Task/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
