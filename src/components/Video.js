import React from "react";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';

const Video = (props) => {
  const { title, description, url } = props.data;
  const { id } = props;
  return (   
      <tbody>
        <tr>
          <td>{title}</td>
          <td>{description}</td>
          <td>{url}</td>
          <td> <NavLink 
            to={{
              pathname: `/edit/${id}`,
              key:{id},
              edit: {
                video: props.data
              }
            }}><button>Edit</button></NavLink></td>
          <td><button>Delete</button></td>
        </tr>
      </tbody>    
  );
};

Video.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.string.isRequired,
};

export default Video;
