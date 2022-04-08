const axios = require("axios");
const fs = require('fs')
const { faker } = require('@faker-js/faker');
const options = {
  method: 'GET',
  url: 'https://movies-app1.p.rapidapi.com/api/movies',
  params: {limit: '24', type: 'movies', query: 'usa'},
  headers: {
    'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
    'X-RapidAPI-Key': '3598ba9e60msh284a384f768a12bp1b7271jsnde35b255233d'
  }
};

/**
 * This script is used to generate movies for json server
 */
const fetchMovies = async()=> {
  let list = [];
  let count =1;

  while(true) {
   const result = await axios(options);
   const formetedResult = result.data.results.map(r => {
     const genres = r.genres.map(g => g.name);
     return {
      _id: r._id,
       title: r.title,
       image: r.image,
       year: r.year,
       genres: genres,
       description: r.description,
       release: r.release,
       duration: `${Math.floor(Math.random()*(200-110+1)+110)} minutes`,
       cast: [
        faker.name.findName(),
        faker.name.findName(),
        faker.name.findName(),
        faker.name.findName(),
        faker.name.findName(),
        faker.name.findName(),
      ]
     }
   })
   list = [...list, ...formetedResult ];
   if(count ===15) break;
   count ++;
  }
  fs.writeFileSync('movies.JSON', JSON.stringify(list, null, 2))
}
fetchMovies();