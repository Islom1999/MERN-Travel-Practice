import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

const TravelBook = () => {
  const [travelBook, setTravelBook] = useState([])
  const [id, setId] = useState('')

  const fetchData = async () => {
    const {data} = await axios.get("http://localhost:5000/api/travel")
    // console.log(data.travel)
    setTravelBook(data.travel)
  }

  const deleteHandler = async(e) => {
    e.preventDefault()
    console.log(id)  
    await axios.delete(`http://localhost:5000/api/travel/${id}`)
    fetchData()
  }
  
  useEffect(() => 
      {fetchData()}
  , []);

  return (
    <>
    {travelBook.map(tb => {
      return(
        <div key={tb._id} className="card my-3">
          <Link to={`/${tb._id}`}/>
        <img src={tb.image} className="card-img-top" alt={tb.title}/>
        <div className="card-body">
            <h5 className="card-title">{tb.title}</h5>
            <p className="card-text">{tb.descr}</p>
            <div className='d-flex justify-content-ctart'>
              <Link className='btn btn-primary ' to={`/update/${tb._id}`}>update</Link>
              <form onSubmit={deleteHandler}>
                <button 
                  type="submit" 
                  className='btn btn-danger mx-2'
                  onClick={() => {setId(tb._id)}}>delete</button>
              </form>
            </div>
        </div>
      </div>
      )
    })}
    </>
  );
}

export default TravelBook;
