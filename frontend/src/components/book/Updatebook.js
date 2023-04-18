import { TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Addbook.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Updatebook(props) {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const methods = useForm({ defaultValues: book });

  // eslint-disable-next-line
  useEffect(() => {
    const url = `http://localhost:3000/book/${id}`;
    axios
      .get(url)
      .then((response) => {

        response.data.data.published_at = new Date(response.data.data.published_at).toISOString().substring(0,10)
        setBook(response.data.data);
      })
      .catch((err) => {
        alert(err);
      });
      console.log("Book",book);
  }, [book,id]);

  const onSubmit = (values) => {
    const url = `http://localhost:3000/book/${book._id}`;
    axios
      .put(url, values)
      .then((response) => {
        alert(response.data.Message);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const { handleSubmit, register, formState: { errors } } = methods;


  return(
      <div>
        {book._id ? (          
        <div>
          <div className='addForm'>
                  
                  <form className='mainForm' onSubmit={handleSubmit(onSubmit)}>
                  <h1 className='heading'> Update Book </h1>

                  <TextField 
                      id="outlined-basic"
                      placeholder = "Abc 123"                          
                      label = "Title"
                      variant="outlined"
                      defaultValue={book.title}
                      className='textField'
                      {...register("title", {
                          required: "Required"
                        })}
                      error={errors.title} 
                  />
                  <br/>
                  <br/>

                  <TextField 
                      id="outlined-basic" 
                      label = "author" 
                      defaultValue={book.author}
                      placeholder = "Zain"
                      variant="outlined"
                      className='textField'
                      {...register("author", {
                          required: "Required"
                          
                        })}
                      error={errors.author}
                  />
                  <br/>
                  <br/>

                  <TextField 
                      id="outlined-basic"
                      label = "No Of Pages"
                      defaultValue={book.no_of_pages}
                      placeholder = "300"
                      type = "int"
                      variant="outlined"
                      className='textField'
                      {...register("no_of_pages", {
                          required: "Required"
                        })}
                      error={errors.no_of_pages}
                  />
                  <br/>
                  <br/>
              
                  <TextField 
                      id="outlined-basic"
                      label = "published_at"
                      defaultValue={book.published_at}
                      placeholder = "2020"
                      variant="outlined"
                      type = "date"
                      className='textField'
                      {...register("published_at", {
                          required: "Required"
                        })}
                      error={errors.published_at}
                  />
                  <br/>
                  <br/>
                  
                    <Button type="submit" className="button" variant="contained" color="primary"> 
                        Update Book
                    </Button>

                  </form>

          </div>
        </div>
        ) : ""
        }
      </div>
  )
}