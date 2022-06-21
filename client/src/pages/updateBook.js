import React from 'react';

const updateBook = () => {
  return (
    <>
      <form>
        <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">Decription</label>
            <input type="text" className="form-control" id="exampleInputPassword2" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
            <input type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  );
}

export default updateBook;
