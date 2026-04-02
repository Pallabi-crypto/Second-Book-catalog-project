import express from 'express'
import bcrypt from 'bcrypt'
import { Book } from '../model/Book.js'
import { verifyAdmin } from './auth.js';

const router = express.Router();

router.post('/add', verifyAdmin, async (req, res) => {
    try{
        const {name, author, imageUrl} = req.body;

        const newBook = new Book({
            name,
            author,
            imageUrl
        })

        await newBook.save();

        return res.json({ added: true })

    }catch(err){
        return res.json({ message: "Error in adding book", error: err.message });
    }
})
router.get('/books', async (req, res) => {
    try {
        const books = await Book.find()
        console.log("Books:", books)
        return res.json(books)
    } catch(err){
        console.error("Error:", err)
        return res.status(500).json({ error: err.message })
    }
})
router.get('/book/:id', async (req, res) => {
   try{
        const id = req.params.id
        const book = await Book.findById({_id: id})
        return res.json(book)
    }catch(err){
        return res.json(err)
        
    } 
})
router.put('/book/:id', async (req, res) => {
   try{
        const id = req.params.id
        const book = await Book.findByIdAndUpdate({_id: id}, req.body)
        return res.json({updated: true, book})
    }catch(err){
        return res.json(err)
        
    } 
})
router.delete('/:id', async (req, res) => {
   try{
        const id = req.params.id
        const book = await Book.findByIdAndDelete({_id: id}, req.body)
        return res.json({deleted: true, book})
    }catch(err){
        return res.json(err)
        
    } 
})

export { router as bookRouter }