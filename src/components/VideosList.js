import React, { Component } from "react";
import axios from "axios";
import Video from "./Video";

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
      <Video key={video.id} id={video.id} data={video.attributes} />
    ));
    return (
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
    );
  }
}

export default VideosList;
