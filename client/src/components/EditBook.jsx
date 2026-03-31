import React, { useEffect, useState } from 'react'
import '../css/AddStudent.css'
//import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const nevigate = useNavigate()
  const { id } = useParams()
  
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:3001/book/book/"+id)
    .then(res => {
        console.log(res);
        setName(res.data.name)
        setAuthor(res.data.author)
        setImageUrl(res.data.imageUrl)
        
    }).catch(err => console.log(err))
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios.put("http://localhost:3001/book/book/" +id, {
      name,
      author,
      imageUrl
    })
    .then(res => {
      console.log("Response:", res.data);
      if(res.data.updated){
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
        <h2>Edit Book</h2>

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

        <button className = 'btn-register' type='submit'> Update </button>
      </form>
    </div>
  );
};
export default EditBook;
