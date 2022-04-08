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
      style={{ padding: "10px" }}
      onClick={() => {
        setMoiveId(movie.id);
        setShowDetails(true);
      }}
    >
      <img
        src={movie.image}
        alt={movie.title}
        style={{ width: "70%", height: "250px" }}
      />
      <hr />
      <div style={{ height: "40px" }}>
        <p style={{ font: "20px", fontWeight: "bold" }}>{movie.title}</p>
      </div>
      <p style={{ font: "20px", fontWeight: "bold" }}>({movie.year})</p>
    </Paper>
  </div>
);

export default MovieItemShow;
