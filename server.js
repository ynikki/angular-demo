const express = require('express');
const app = express();

const PORT = 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('index.html')
});

const movies = [
  {
    id: 1,
    title: 'Suicide Squad',
    year: 2016
  },
  {
    id: 2,
    title: 'The Dark Knight',
    year: 2008
  },
  {
    id: 3,
    title: 'Willy Wonka & the Chocolate Factory',
    year: 1971
  },
  {
    id: 4,
    title: 'A New Hope',
    year: 1977
  },
  {
    id: 4,
    title: 'Star Wars: The Empire Strikes Back',
    year: 1971
  },
  {
    id: 5, 
    title: 'Star Wars: Return of the Jedi',
    year: 1980
  },
  {
    id: 6,
    title: 'Psycho',
    year: 1960
  },
  {
    id: 7,
    title: 'House of 1000 Corpses',
    year: 2003
  },
  {
    id: 8,
    title: 'The Devils Rejects',
    year: 2005
  },
  {
    id: 9,
    title: 'Bird',
    year: 1980
  },
  {
    id: 10,
    title: 'Fight Club',
    year: 1999
  }
]
app.get('/api/movies', function (req, res) {
  res.json(movies);
});

app.use('/404', function (req, res) {
  res.status(404).render('404');
});

const server = app.listen(PORT, function () {
  console.log('Now listening on PORT:' + PORT);
});