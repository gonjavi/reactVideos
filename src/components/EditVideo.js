import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { axios } from 'axios';

const EditVideo = props => {
  const { location: { edit: { video} } } = props;
  const [title, setTitle] = useState(video.title);
  const [description, setDescription] = useState(video.description);
  const [url, setUrl] = useState(video.url);
  const [year, setYear] = useState(video.year);
  const [author, setAuthor] = useState(video.author);

  const { match } = props;
  const { params } = match;
  const { id } = params;
 

  const submitHandler = (id, title, description, url, year, author) => async () => {
    console.log(title)
   /*  try {
      const { data } = await axios.put(`https://videosapi-gon.herokuapp.com/api/v1/videos/${id}`,
        {
          title,
          description,
          url,
          year,
          author,         
        },
      );
      console.log(data)
      props.history.push("/");
    } catch (error){ 
      console.log(error);
    } */
  }


  return (
    <div>
      <NavLink to="/">Home</NavLink>
        <form onSubmit={submitHandler(id,title, description, url, author, year)}>
          <label>
            Title:
            <input type="text" name="title" placeholder={video.title} onChange={e => setTitle(e.target.value)} />
          </label>
          <label>
            Description:
            <input type="text" name="description" placeholder={video.url} onChange={e => setDescription(e.target.value)} />
          </label>
          <label>
            Url:
            <input type="text" name="url" placeholder={video.url} onChange={e => setUrl(e.target.value)} />
          </label>
          <label>
            Author:
            <input type="text" name="author" placeholder={video.author} onChange={e => setAuthor(e.target.value)} />
          </label>
          <label>
            Year:
            <input type="date" name="year" onChange={e => setYear(e.target.value)} />
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
};

export default EditVideo;

