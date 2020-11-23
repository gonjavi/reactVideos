import React, { Component } from "react";
import axios from "axios";
import Video from "./Video";
import { NavLink } from 'react-router-dom';

class VideosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      error: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://videosapi-gon.herokuapp.com/api/v1/videos/")
      .then((res) => {
        this.setState({ datos: res.data.data });
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  }

  RegisterVideo(){

  }

  render() {
    const { datos } = this.state;
    const videos = datos.map((video) => (
      <Video 
        key={video.id} 
        id={video.id} 
        data={video.attributes}
         className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      />
    ));
    return (
      <div className="container">
        <div>
          <button>
             <NavLink to="new">Register New Video</NavLink>
          </button>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Url</th>
            </tr>
          </thead>
          {videos}
        </table>
      </div>
    );
  }
}

export default VideosList;
