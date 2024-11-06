import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Dashboard from './Pages/Dashboard'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/api/signup' element={<Signup/>}/>
        <Route path='/api/login' element={<Login/>}/>
        <Route path='/api/todo' element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
