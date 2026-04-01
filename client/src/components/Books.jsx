import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import '../css/Book.css'

const Books = ({roles}) => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/book/books`,{withCredentials: true})
        //axios.get('http://localhost:3001/book/books')
        .then(res => {
            setBooks(res.data)
            console.log(res.data);
            
        }).catch(err => console.log(err))
    }, [])
  return (
    <div className='book-list'>
        {
            books.map(book => {
               return <BookCard key={book._id} book = {book} roles={roles}></BookCard>
            })}
    </div>
  )
}

export default Books
