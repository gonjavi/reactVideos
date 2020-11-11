import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const RegisterVideo = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [year, setYear] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (e, title, description, url, year, author) => {
    try {
      e.preventDefault();
      await axios.post('https://videosapi-gon.herokuapp.com/api/v1/videos/',
      { 
        title,
        description,
        url, 
        year, 
        author,
      });
      // props.history.push('/');
    } catch (err) {
      setError(err);
      console.log(error)
    }
  }
  let displayError;
  if (error) {
    displayError = <div>{error}</div>;
  }
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <h1>Register New Video</h1>
      {/* {displayError} */}
      <div>
        <form onSubmit={(e) => submitHandler(e,title, description, url, author, year)}>
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
            Year:
            <input type="text" name="year" onChange={e => setYear(e.target.value)} />
          </label>
          <label>
            Author:
            <input type="text" name="author" onChange={e => setAuthor(e.target.value)} />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
}

export default RegisterVideo;
