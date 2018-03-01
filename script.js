var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    pics: 'https://images.pexels.com/photos/902204/pexels-photo-902204.jpeg?h=350&auto=compress&cs=tinysrgb'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    pics: 'https://images.pexels.com/photos/903171/pexels-photo-903171.jpeg?h=350&auto=compress&cs=tinysrgb'
  },
  {
    id: 3,
    title: 'Inny Film',
    desc: 'Jakis inny film',
    pics: 'https://images.pexels.com/photos/902248/pexels-photo-902248.jpeg?h=350&auto=compress&cs=tinysrgb'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.pics})
    );
});
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

  ReactDOM.render(element, document.getElementById('app'));
