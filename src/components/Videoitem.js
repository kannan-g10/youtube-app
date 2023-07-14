import { Grid, Typography, Paper } from "@mui/material";

const Videoitem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ margin: "20px" }}
          src={video.snippet.thumbnails.medium.url}
          alt="thumbnail"
        />
        <Typography variant="subtitle1">
          <b>{video.snippet.description}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Videoitem;
