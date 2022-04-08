
import axios from "axios"
export const fetchListMovies = async (params) => {
  try {
    let baseUrl = `${process.env.REACT_APP_BASE_URL}?_limit=${params.limit}&_page=${params.page}&_sort=title&_order=asc`;

    const headers = {
      // 'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
      // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'Content-Type': 'application/json'
    };

    if (params.popular) {
      baseUrl += `&year=${params.popular}`
    }

    const result  = await axios.get(baseUrl, {headers});
    return result.data
        
  } catch (error) {
    throw new Error(error)
  }
}

export const fetchMovieById = async (params) => {
  try {
    let baseUrl = `${process.env.REACT_APP_BASE_URL}/${params.movie_id}`;

    const headers = {
      'Content-Type': 'application/json'
    };
    const result  = await axios.get(baseUrl, {headers});
    console.log(result)
    return result
  } catch (error) {
    throw new Error(error)
  }
}