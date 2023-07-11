mapofgenres = new Map();
mapofgenres.set("Pop","Taylor Swift");
mapofgenres.set("Rap","Talha Anjum");
mapofgenres.set("Indian Music" , "Arijit Singh");
mapofgenres.set("Rock", "The Beatles");
mapofgenres.set("Jazz", "Muskaanein Jhooti Hai");
mapofgenres.set("Electro" ,"Marshmello");
mapofgenres.set("Classical", "Rahat Fateh Ali khan");
mapofgenres.set("Asian Music","BlackPink");
mapofgenres.set("Band","One Direction");

arrayofgenres = ["Pop","Rap","Indian Music", "Rock" , " Jazz","Electro","Classical" , "Asian Music" , "Band"]

function genresbox(){
    // Get the element to which cards will be appended
var variableContent = document.getElementById('variable-content');
var genreContent = document.createElement('div');
genreContent.id = 'genreContent'
variableContent.append(genreContent);

// Create eight card elements
for (var i = 0; i < 9; i++) {
  // Create the card element
  var card = document.createElement('div');
  card.classList.add('card');

  // Create the image element
  var image = document.createElement('img');
  image.src = 'genresImages/pop.jpg';
  image.classList.add('card-img');
  image.alt = '...';

  // Create the card overlay
  var cardOverlay = document.createElement('div');
  cardOverlay.classList.add('card-img-overlay');

  // Create the card title
  var cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = `${arrayofgenres[i]}`;

  // Append the image and title to the card overlay
  cardOverlay.appendChild(cardTitle);

  // Append the image and overlay to the card
  card.appendChild(image);
  card.appendChild(cardOverlay);

  // Append the card to the variable content element
  genreContent.appendChild(card);
}

}