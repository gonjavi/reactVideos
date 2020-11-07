import React from "react";
import PropTypes from "prop-types";

const Video = (props) => {
  const { title, description, url } = props.data;
  return (
    <tbody>
      <tr>
        <td>{title}</td>
        <td>{description}</td>
        <td>{url}</td>
      </tr>
    </tbody>
  );
};

Video.propTypes = {
  data: PropTypes.objectOf(PropTypes.any)
};

export default Video;
