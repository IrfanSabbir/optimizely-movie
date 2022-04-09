import React, { useEffect, useState } from "react";
import {
  Grid,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
} from "@mui/material";

import { fetchMovieById } from "../../../API/movieFetcher";
import Spinner from "../ContentHelper/Spinner";

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
      <Dialog open={open} onClose={setOpen} maxWidth="lg">
        <DialogTitle className="Title">Movie Details</DialogTitle>
        <DialogContent className="DialogueWrapper">
          {loading ? (
            <Spinner />
          ) : (
            <>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={5}
                  className="CenterContent"
                >
                  <img src={movie.image} alt={movie.title} className="image" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={7}>
                  <div>
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
                          <span key={genre} className="PointText">
                            &middot; {genre}
                          </span>
                        );
                      })}
                  </p>
                  <p className="SubTitle">
                    Cast:
                    {movie["cast"] &&
                      movie["cast"].map((cast) => {
                        return (
                          <span key={cast} className="PointText">
                            &middot; {cast}
                          </span>
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
