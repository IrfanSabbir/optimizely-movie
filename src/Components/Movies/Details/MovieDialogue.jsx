import React, { useEffect, useState } from "react";
import {
  LinearProgress,
  Grid,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
} from "@mui/material";

import { fetchMovieById } from "../../../API/movieFetcher";

export default function MovieDetails({ open, setOpen, moiveId }) {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    try {
      setLoading(true);
      const result = await fetchMovieById(moiveId);
      if (result.success) {
      }
      setMovie(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Dialog
        open={open}
        onClose={setOpen}
        maxWidth="lg"
      >
        <DialogTitle className="Title">Movie Details</DialogTitle>
        <DialogContent style={{ width: "60vw" }}>
          {loading ? (
            <>
              <LinearProgress color="secondary" />
              <br />
              <LinearProgress color="secondary" />
              <br />
              <LinearProgress color="secondary" />
            </>
          ) : (
            <>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={5}
                  style={{ textAlign: "center" }}
                >
                  <img
                    src={movie.image}
                    alt={movie.title}
                    style={{ borderRadius: "20px" }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={7}>
                  <div style={{ height: "40px" }}>
                    <p className="Title">
                      {movie.title} ({movie.year})
                    </p>
                  </div>
                  <p className="SubText">
                    Released On{" "}
                    <span className="SubTitle">{movie.release}</span> with{" "}
                    <span className="SubTitle">{movie.duration}</span> Runtime.
                  </p>
                  <p className="SubTitle">
                    Genre:
                    {movie["genres"] &&
                      movie["genres"].map((genre) => {
                        return (
                          <span className="PointText">&middot; {genre}</span>
                        );
                      })}
                  </p>
                  <p className="SubTitle">
                    Cast:
                    {movie["cast"] &&
                      movie["cast"].map((cast) => {
                        return (
                          <span className="PointText">&middot; {cast}</span>
                        );
                      })}
                  </p>
                  <p className="SubTitle">Summary</p>
                  <hr />
                  <p className="SubText">{movie.description}</p>
                </Grid>
              </Grid>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={setOpen}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
