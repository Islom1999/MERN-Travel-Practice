import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/navbar";
import Main from "./pages/main";
import AddBook from './pages/addBook';
import UpdateBook from './pages/updateBook';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/add" element={<AddBook/>}/>
                <Route path="/update/:id" element={<UpdateBook/>}/>
                
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
      
    </>
  );
}

export default App;
