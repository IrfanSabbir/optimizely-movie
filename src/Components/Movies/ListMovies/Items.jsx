import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import { fetchListMovies } from "../../../API/movieFetcher";
import MovieDetails from "../Details/MovieDialogue";
import Paginations from "../ContentHelper/Paginations";
import SearchParams from "../ContentHelper/SearchParams";
import MovieItemShow from "../ContentHelper/MovieItem";
import Spinner from "../ContentHelper/Spinner";

const ItemList = ({ title, popular }) => {
  const [moviesList, setMovieList] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [moiveId, setMoiveId] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useState({
    popular: popular ? popular : undefined,
    limit: 25,
    page: 1,
    title: "",
  });

  const fetchList = async () => {
    try {
      setLoading(true);
      const result = await fetchListMovies(searchParams);
      if (result.success) {
      }
      setMovieList(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  const movieDetailsHandler = () => {
    setShowDetails(false);
    setMoiveId("");
  };

  return (
    <>
      <p className="Title">Showing {title}</p>
      <SearchParams
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        refresh={refresh}
        setRefresh={setRefresh}
      />
      <br />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Grid container spacing={2}>
            {moviesList &&
              moviesList.map((movie) => {
                return (
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    md={3}
                    lg={2.4}
                    xl={2.4}
                    key={movie.id}
                  >
                    <MovieItemShow
                      setMoiveId={setMoiveId}
                      setShowDetails={setShowDetails}
                      movie={movie}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </>
      )}

      <Paginations
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        refresh={refresh}
        setRefresh={setRefresh}
      />

      {showDetails && (
        <MovieDetails
          open={showDetails}
          setOpen={movieDetailsHandler}
          moiveId={moiveId}
        />
      )}
    </>
  );
};

export default ItemList;
