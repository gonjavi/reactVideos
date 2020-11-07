import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const EditVideo = props => {
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const { location: { edit: { video} } } = props;
  return (
    <div>
      <NavLink to="/">Home</NavLink>
        <form>
          <label>
            Title:
            <input type="text" name="title" placeholder={video.title} />
          </label>
          <label>
            Description:
            <input type="text" name="description" placeholder={video.url} />
          </label>
          <label>
            Url:
            <input type="text" name="url" placeholder={video.url} />
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

