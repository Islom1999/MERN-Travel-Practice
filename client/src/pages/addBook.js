import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
  const [title, setTitle] = useState('xcvcx')
  const [descr, setDescr] = useState('')
  const [image, setImage] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log({
      title,
      descr,
      image
    })
    await axios.post('http://localhost:5000/api/travel/add', {
      title,
      descr,
      image
    })
    navigate('/')
  }

  return ( 
    <>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
            <input 
              type="text" 
              className="form-control" 
              id="exampleInputEmail1"
              onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">Decription</label>
            <input 
              type="text" 
              className="form-control" 
              id="exampleInputPassword2" 
              onChange={e => setDescr(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
            <input 
              type="text" 
              className="form-control" 
              id="exampleInputPassword1" 
              onChange={e => setImage(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  );
}

export default AddBook;
