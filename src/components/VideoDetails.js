import { Paper, Typography } from "@mui/material";

const VideoDetails = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameborder="0"
          height="100%"
          width="100%"
          title="video-player"
          src={videoSrc}
        ></iframe>
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </>
  );
};

export default VideoDetails;
