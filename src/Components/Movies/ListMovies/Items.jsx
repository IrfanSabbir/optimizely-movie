import React, { useEffect, useState } from "react";
import { fetchListMovies } from "../../../API/movieFetcher";

import { LinearProgress, Grid, Paper } from "@mui/material";

const ItemList = ({ title, popular }) => {
  const [moviesList, setMovieList] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [searchParams, setSearchParams] = useState({
    popular: popular ? popular : undefined,
    limit: 25,
    page:1,
  });
  const [loading, setLoading] = useState(false);
  const fetchList = async () => {
    try {
      setLoading(true);
      const result = await fetchListMovies(searchParams);
      if (result.success) {
      }
      setMovieList(result);
      console.log(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchList();
  }, [refresh]);

  return (
    <>
      <p style={{ fontSize: "25px", fontWeight: "bold", color: 'white' }}>Showing {title}</p>
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
          <Grid container spacing={2}>
            {moviesList &&
              moviesList.map((movie) => {
                return (
                  <Grid item xs={6} sm={4} md={3} lg={2.4} xl={2.4}>
                    <Paper variant="elevation" elevation={3} style={{ padding: "10px" }}>
                      <img src={movie.image} alt={movie.title} style={{ width: "70%", height: "250px" }}/>
                      <hr />
                      <p style={{ font: "20px", fontWeight: "bold" }}>{movie.title}{movie.year}</p>
                      <p style={{ font: "20px", fontWeight: "bold" }}>({movie.year})</p>
                    </Paper>
                  </Grid>
                );
              })}
          </Grid>
        </>
      )}
    </>
  );
};

export default ItemList;
