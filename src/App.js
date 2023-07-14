import { Component } from "react";

import { Grid } from "@mui/material";

import Searchbar from "./components/Searchbar";
import VideoDetails from "./components/VideoDetails";
import VideoList from "./components/VideoList";

import youtube from "./api/youtube";
import { apiKey } from "./api_key";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async (searchTerm) => {
    const res = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: apiKey,
        q: searchTerm,
      },
    });
    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <Searchbar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
