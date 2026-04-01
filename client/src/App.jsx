import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Login from './components/Login'
import AddStudent from './components/AddStudent.jsx'
import { useState } from 'react'
import Logout from './components/Logout.jsx'
import Dashboard from './components/Dashboard.jsx'
import { useEffect } from 'react'
import axios from 'axios'
import AddBook from './components/AddBook.jsx'
import Books from './components/Books.jsx'
import EditBook from './components/EditBook.jsx'
import DeleteBook from './components/DeleteBook.jsx'

function App() {
  const [roles, setRoles] = useState('')

   axios.defaults.withCredentials = true;
  useEffect(() =>{
    axios.get('/auth/verify')
    .then(res => {
      if(res.data.login){
        setRoles(res.data.role)
      }else{
        setRoles('')
      }
    }).catch(err => console.log(err));
    
  }, [])
  return (
    <BrowserRouter>
    <Navbar roles={roles} setRoles={setRoles}/>
    <Routes>
    <Route path='/' element={<Home /> }></Route>
    <Route path='/books' element={<Books roles={roles}/> }></Route>
    <Route path='/login' element={<Login setRoles= {setRoles}/> }></Route>
    <Route path='/dashboard' element={<Dashboard /> }></Route>
    <Route path='/addstudent' element={<AddStudent /> }></Route>
    <Route path='/logout' element={<Logout setRoles= {setRoles}/> }></Route>
    <Route path='/addbook' element={<AddBook /> }></Route>
    <Route path='/book/:id' element={<EditBook /> }></Route>
    <Route path='//:id' element={<DeleteBook /> }></Route>

    </Routes>
    </BrowserRouter>
    
  )
}

export default App
