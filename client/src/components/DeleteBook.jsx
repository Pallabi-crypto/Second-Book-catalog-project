import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const DeleteBook = () => {
    
  const navigate = useNavigate()
  const { id } = useParams()
    useEffect(() => {
        axios.delete(`${import.meta.env.VITE_API_URL}/book/`+id, { withCredentials: true } )
        //axios.delete('http://localhost:3001/book/' +id, { withCredentials: true })
        .then(res => {
            if(res.data.deleted){
                navigate('/books')
            }
        })
        .catch(err => console.log(err))
    }, [])

}

export default DeleteBook
