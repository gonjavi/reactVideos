import React from "react";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';
import DeleteVideoApi from '../actions/DeleteVideo';
import Button from 'react-bootstrap/Button';

const Video = (props) => {
  const { title, description, url, year, author } = props.data;
  const { id } = props;

  function DeleteVideo() {    
    DeleteVideoApi(id);
  } 
  
  return (   
      <tbody>
        <tr>
          <td>{title}</td>
          <td>{description}</td>
          <td>{url}</td>
          <td>{author}</td>
          <td>{year}</td>
          <td> <NavLink 
            to={{
              pathname: `/edit/${id}`,
              key:{id},
              edit: {
                video: props.data
              }
            }}><Button variant="secondary">Edit</Button>{' '}</NavLink></td>
          <td><Button variant="info" onClick={DeleteVideo}>Delete</Button>{' '}</td>
        </tr>
      </tbody>    
  );
};

Video.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.string.isRequired,
};

export default Video;
