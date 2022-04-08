const axios = require("axios");
const fs = require('fs')
const { faker } = require('@faker-js/faker');
const _ = require('lodash');

let options = {
  method: 'GET',
  url: 'https://movies-app1.p.rapidapi.com/api/movies',
  params: {limit: '24', type: 'movies', page: '1'},
  headers: {
    'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
    'X-RapidAPI-Key': '3598ba9e60msh284a384f768a12bp1b7271jsnde35b255233d'
  }
};

const fetchMovies = async()=> {
  let list = [];
  let count =1;

  while(true) {
    console.log(options.params)
   const result = await axios(options);
   const formetedResult = result.data.results.map(r => {
     const genres = r.genres.map(g => g.name);
     return {
       id: r._id,
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
   if(count === 20) break;
   count ++;
   options.params.page =  `${count}`;
  }
  console.log(list.length);

  const uniqueList = _.uniqBy(list, 'id');
  console.log(uniqueList.length);
  fs.writeFileSync('movies.json', JSON.stringify(uniqueList, null, 2))
}
fetchMovies();

const f1= require('./movies.json')
const uniqueDo =() => {
  const uniqueList = _.uniqBy(f1, 'title');
  fs.writeFileSync('movies2.json', JSON.stringify(uniqueList, null, 2))

  console.log(uniqueList.length);

}
// uniqueDo();