import { Grid } from "@mui/material";
import Videoitem from "./Videoitem";

const VideoList = ({ videos, onVideoSelect }) => {
  console.log(videos);
  const listOfVideos = videos.map((video, id) => (
    <Videoitem key={id} video={video} onVideoSelect={onVideoSelect} />
  ));
  return (
    <Grid container spacing={8}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
