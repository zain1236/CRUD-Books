import React from 'react'
import { Link } from "react-router-dom";
import "./.css"

export const Header = () => {
  return (
    <div className='nav'>
        
        <Link className='text' to={"/add"}>
            Add Book
        </Link>

        <Link className='text' to={"/"}>
            Show Books
        </Link>

    </div>
  )
}
