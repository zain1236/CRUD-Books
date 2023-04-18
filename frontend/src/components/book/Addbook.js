import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import "./Addbook.css"


const Addbook = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = (values) => {

      const reqoptions = {
          method : "POST",
          headers : {"Content-Type" : "application/JSON",
                    //  "Authorization" : 'Bearer ' + localStorage.getItem('t')
          },
          body : JSON.stringify(values)
      }
      const url = "http://localhost:3000/book";
      fetch(url,reqoptions)
      .then((response) => response.json())
      .then((json) => {
          console.log(json);
          alert(json["Message"])
          // //setisLoadingData(false);
          // setShowData(true);
          // setReturnCredentials(json["CheckIn_Details"]);
      })
      .catch((error) => console.log(error));
    }


    return(
        <div>          
            <div>
              <div className='addForm'>
                      
                      <form className='mainForm' onSubmit={handleSubmit(onSubmit)}>
                      <h1 className='heading'> Add Book </h1>

                      <TextField 
                          id="outlined-basic"
                          placeholder = "Abc 123"                          
                          label = "Title"
                          variant="outlined"
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
                            Add Book
                        </Button>

                      </form>

              </div>
            </div>
        </div>
    )
  }

export default Addbook;