var input  = document.getElementById('input'); 

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
}
function remove(){
    var songContainers = document.querySelectorAll('.song-container');
songContainers.forEach(function(container) {
  container.remove();
});
var playersong = document.querySelector('.songPlayer');
playersong.remove();
}