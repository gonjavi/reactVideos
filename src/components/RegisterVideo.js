import React, { useState } from 'react';
import axios from 'axios';

const RegisterVideo = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [year, setYear] = useState(Date);
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (title, description, url, year, author) => {
    try {
      await axios.post('https://videosapi-gon.herokuapp.com/api/v1/videos/',
      { 
        title,
        description,
        url, 
        author,
        year,         
      });
      props.history.push('/');
    } catch (err) {
      setError(err);      
    }
  }
  let displayError;
  if (error) {
    displayError = <div>{error}</div>;
  }
  return (
    <div className="container">
      
      <h1>Register New Video</h1>
      {/* {displayError} */}
      <div>
        <form onSubmit={(e) => submitHandler(title, description, url, year, author)}>
          <label>
            title:
            <input type="text" name="title" onChange={e => setTitle(e.target.value)} required />
          </label>
          <label>
            Description:
            <input type="text" name="description" onChange={e => setDescription(e.target.value)} />
          </label>
          <label>
            Url:
            <input ty="text" name="url" onChange={e => setUrl(e.target.value)} />
          </label>
          <label>
            Author:
            <input type="text" name="author" onChange={e => setAuthor(e.target.value)} />
          </label>
          <label>
            Date:
            <input type="date" name="year" onChange={e => setYear(e.target.value)} />
          </label>
          
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
}

export default RegisterVideo;
