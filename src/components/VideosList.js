import React, { Component } from "react";
import axios from "axios";
import Video from "./Video";
import { NavLink } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

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
          <button className="mt-3">
             <NavLink to="new">Register New Video</NavLink>
          </button>
        </div>
        
        <Table striped bordered hover className="mt-3 text-center">
          <thead>
            <tr>
              <th>TITLE</th>
              <th>DESCRIPTION</th>
              <th>URL</th>
              <th>AUTHOR</th>
              <th>DATE</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {videos}
        </Table>
      </div>
    );
  }
}

export default VideosList;
