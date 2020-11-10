import axios from 'axios';

const DeleteVideo = id => {
  console.log(id)
  axios.delete(`https://videosapi-gon.herokuapp.com/api/v1/videos/${id}`)
    .then(res => {
      if (res.error) {
        throw (res.error);
      }
      window.location.reload(false);
      return res;
    }).catch(error => error);
};

export default DeleteVideo;
