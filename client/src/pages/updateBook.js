import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios';


const UpdateBook = () => {
  const [title, setTitle] = useState('')
  const [descr, setDescr] = useState('')
  const [image, setImage] = useState('')

  const {id} = useParams()
  const navigate = useNavigate()

  const fechData = async() => {
    const {data} = await axios.get(`http://localhost:5000/api/travel/${id}`)

    setTitle(data.travel.title)
    setDescr(data.travel.descr)
    setImage(data.travel.image)

  }

  useEffect(() => {
    fechData()
  }, [])

  const updateHandler = async(e) => {
    e.preventDefault()
    await axios.put(`http://localhost:5000/api/travel/${id}`, {
      title,
      descr,
      image
    })
    navigate('/')
  }

  return (
    <>
      <form onSubmit={updateHandler}>
        <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
            <input 
              type="text" 
              className="form-control" 
              id="exampleInputEmail1" aria-describedby="emailHelp" 
              onChange={e => setTitle(e.target.value)}
              value={title}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">Decription</label>
            <input 
              type="text" 
              className="form-control" id="exampleInputPassword2"
              onChange={e => setDescr(e.target.value)} 
              value={descr}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
            <input 
              type="text" 
              className="form-control" id="exampleInputPassword1" 
              onChange={e => setImage(e.target.value)}
              value={image}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  );
}

export default UpdateBook;
