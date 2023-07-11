var input  = document.getElementById('input'); 
var searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click',function(){
    remove();
    getValue();
    
    search(value);
})
input.addEventListener("keydown",function(event){
    if(event.key=== "Enter"){
        remove();
        getValue();
        
        search(value)
    }
})
var value = "Arijit Singh"
function getValue(){
    value = input.value;
    input.value =""
}
function remove(){
    curaud.pause();


    try{
    var songContainers = document.querySelectorAll('.song-container');
songContainers.forEach(function(container) {
  container.remove();
});
var playersong = document.querySelector('.songPlayer');
playersong.remove();} catch(error){
    console.log("Nothing to remove");
}
try{
    var genreContainers = document.querySelectorAll('.card');
    genreContainers.forEach(function(container){
        container.remove();
    })
}catch(error){
    console.log("No genre containers");
}
}

// going to genres
var genre = document.getElementById('generes');
genre.addEventListener('click', function(){
    if(playing === true){
        
    }
    remove();
    genresbox();
    genreValues();
})

// Working with genres
function genreValues(){
 var genreval = document.querySelectorAll('.card');
 genreval.forEach(function(element){
    element.addEventListener('click', function(){
        
        var cardTitle = element.querySelector('.card-img-overlay').querySelector('.card-title').innerHTML;
         var  genreId = mapofgenres.get(cardTitle);
         remove();
        search(genreId);
         
    })
 })
}

var exploreButton = document.querySelector('#explore');
exploreButton.addEventListener('click', function(){
    var random = Math.random();
    console.log(random);
    let exp = random*(explore.length);
    console.log(explore.length)
   
    exp =Math.floor(exp);
    console.log(exp);
    remove();
    search(explore[exp]);
})

//sidebar toggle
let toggleButton = document.querySelector('#toggleButton');
let sidebar = document.querySelector("#side-container");
toggleButton.addEventListener('click',function(){
    sidebar.classList.toggle('open');
})
let player = document.getElementsByClassName("songPlayer");
if(window.matchMedia("(max-width: 750px)").matches){
    player[0].style.display="none";
}
