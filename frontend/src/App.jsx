import './App.css'
import {Route,Routes} from "react-router-dom"
import Login from './Login'
import Register from './Register'
import { ToastContainer } from 'react-toastify'
import HomePage from './Home'
import { useAuthContext } from './context/authContext'
import InternDashboard from './InternDashboard'
import Admin from './Admin'
import Profile from './Profile'
function App() {

  const {authUser}=useAuthContext()
  return (
    <>
    <Routes>
      <Route path='/join' element={ <Register/>} ></Route>
      <Route path='/login' element={  <Login/>} ></Route>
      <Route path='/intern' element={ authUser ? <InternDashboard/>: <Login/>} ></Route>
      <Route path="/admin" element={<Admin/>} ></Route>
      <Route path="/profile/:id" element={<Profile/>} ></Route>
      <Route path='/' element={<HomePage/>} ></Route>
    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App
