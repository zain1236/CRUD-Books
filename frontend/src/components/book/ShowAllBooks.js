import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const ShowAllBooks = () => {

    const [books,setBooks] = useState([]);
    
    const handleDelete = (id) => {
      const url = "http://localhost:3000/book";

      axios.delete(url+"/"+id)
      .then(response => {
        const url = "http://localhost:3000/book";
        axios.get(url)
        .then((response) => {
          if (response.data.Message === "success")
          {
              setBooks(response.data.data);
          }
          else
          {
              alert(response.data.Message)
          }
        })
      })
      .catch(error => {
        alert(error)
      });

      

    };

    useEffect(() => {     

      const url = "http://localhost:3000/book";
      axios.get(url)
      .then((response) => {
        console.log(response);
        if (response.data.Message === "success")
        {
            setBooks(response.data.data);
        }
        else
        {
            alert(response["Message"])
        }
      })
      .catch((error)=>{
        alert(error)
      })
  
        
      }, []);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">No of Pages</TableCell>
            <TableCell align="right">Published</TableCell>
            <TableCell align="right"> Actions </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow
              key={book._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={`/update/${book._id}`}> {book.title} </Link>
              </TableCell>
              <TableCell align="right">{book.author}</TableCell>
              <TableCell align="right">{book.no_of_pages}</TableCell>
              <TableCell align="right">{book.published_at}</TableCell>
              <TableCell align="right">
                <Button variant="contained" color='error'
                  onClick={()=>handleDelete(book._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
