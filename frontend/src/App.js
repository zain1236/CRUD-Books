import React from "react";
import { Route,BrowserRouter as Router,Routes } from "react-router-dom";
import Addbook from "./components/book/Addbook";
import { ShowAllBooks } from "./components/book/ShowAllBooks";
import Updatebook from "./components/book/Updatebook";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div>
  
      <Router>
        <Routes>
          <Route exact path="/"
            element={
              <div>
                <Header />
                <ShowAllBooks />
              </div>
            }
          />

        <Route exact path="/add"
            element={
              <div>
                <Header />
                <Addbook />
              </div>
            }
          />

          <Route exact path="/update/:id"
            element={
              <div>
                <Header />
                <Updatebook />
              </div>
            }
          />

        </Routes>
      </Router>
  
    </div>
  );  
}


export default App;
