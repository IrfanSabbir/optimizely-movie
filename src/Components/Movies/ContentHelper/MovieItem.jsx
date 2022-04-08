import { Paper } from "@mui/material";

const MovieItemShow = ({ setMoiveId, setShowDetails, movie }) => (
  <div
    className="MovieGrid"
    onClick={() => {
      setMoiveId(movie.id);
      setShowDetails(true);
    }}
  >
    <Paper
      variant="elevation"
      elevation={3}
      className="MovieCardPaper"
      onClick={() => {
        setMoiveId(movie.id);
        setShowDetails(true);
      }}
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="image imageThumbnail"
      />
      <hr />
      <div className="MovieItemTestHeight">
        <p className="SubTitle">{movie.title}</p>
      </div>
      <p className="SubTitle">({movie.year})</p>
    </Paper>
  </div>
);

export default MovieItemShow;
