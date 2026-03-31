import React, { useState } from 'react'
import '../css/AddStudent.css'
//import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const nevigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios.post("http://localhost:3001/book/add", {
      name,
      author,
      imageUrl
    })
    .then(res => {
      console.log("Response:", res.data);
      if(res.data.added){
        nevigate('/books')
      }else{
        console.log(res);
        
      }

    })
    .catch(err => console.log(err));
  };

  return (
    <div className='student-form-container'>
      <form className='student-form' onSubmit={handleSubmit}>
        <h2>Add Book</h2>

        <div className='form-group'>
          <label> Book Name:</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label>Author Name:</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label>Image URL:</label>
          <input
            type='text'
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <button className = 'btn-register' type='submit'> Add </button>
      </form>
    </div>
  );
};
export default AddBook;