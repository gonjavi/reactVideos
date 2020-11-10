import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const EditVideo = props => {
 // const { location: { edit: { video} } } = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [year, setYear] = useState('');
  const [author, setAuthor] = useState('');

  const { match } = props;
  const { params } = match;
  const { id } = params;
 

  const submitHandler = async (e, id, title, description, url, year, author) => {
    try {
      await axios.patch(
        `https://videosapi-gon.herokuapp.com/api/v1/videos/${id}`,
        {
          title,
          description,
          url,
          year,
          author
        }
      );
      window.location.reload(false);
      props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <NavLink to="/">Home</NavLink>
        <form onSubmit={() => submitHandler(id,title, description, url, author, year)}>
          <label>
            Title:
            <input type="text" name="title" placeholder="title" onChange={e => setTitle(e.target.value)} />
          </label>
          <label>
            Description:
            <input type="text" name="description" placeholder="description" onChange={e => setDescription(e.target.value)} />
          </label>
          <label>
            Url:
            <input type="text" name="url" placeholder="url" onChange={e => setUrl(e.target.value)} />
          </label>
          <label>
            Author:
            <input type="text" name="author" placeholder="author" onChange={e => setAuthor(e.target.value)} />
          </label>
          <label>
            Year:
            <input type="date" name="year" placeholder="year" onChange={e => setYear(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />          
        </form>
    </div>
  );
}

EditVideo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
 // video: PropTypes.objectOf(PropTypes.any),
};

export default EditVideo;

