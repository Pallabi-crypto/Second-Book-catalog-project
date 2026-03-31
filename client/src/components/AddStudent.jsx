import React, { useState } from 'react'
import '../css/AddStudent.css'
//import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const [roll, setRoll] = useState('');
  const [username, setUserName] = useState('');
  const [grade, setGrade] = useState('');
  const [password, setPassword] = useState('');

  const nevigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/register/register", {
      roll,
      username,
      grade,
      password
    })
    .then(res => {
      console.log("Response:", res.data);
      if(res.data.registered){
        nevigate('/dashboard');
      }
    })
    .catch(err => console.log(err));
  };

  return (
    <div className='student-form-container'>
      <form className='student-form' onSubmit={handleSubmit}>
        <h2>Add Student</h2>

        <div className='form-group'>
          <label>Roll No:</label>
          <input
            type='text'
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label>User Name:</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label>Grade:</label>
          <input
            type='text'
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className = 'btn-register' type='submit'>Register</button>
      </form>
    </div>
  );
};
export default AddStudent;