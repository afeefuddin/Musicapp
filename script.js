const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aa83a74ae4mshf6930361d7a909fp1b564cjsnb0b7875a93fa',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

	var curaud = new Audio();
	let currSong = 0;
	let playing = false;
	let songIndex =-1;
	
	let search= (artist)=>{
	 fetch(url+ artist, options)
	 .then(response=>response.json())
	 .then(response=>{
		for (let i = 0; i < 8; i++) {

			// Adding the HTML for song container
			var pDiv = document.getElementById('variable-content');
			var iDiv = document.createElement('div');
			iDiv.className = 'song-container';
			
			pDiv.appendChild(iDiv);
			var contentDiv = document.createElement('div');
			contentDiv.className = 'songContent';
			iDiv.appendChild(contentDiv);
			var nameCont = document.createElement('div');
			nameCont.className = 'songNameContainer'
			contentDiv.appendChild(nameCont);
			
			var imageDiv = document.createElement('div');
			imageDiv.className = 'songImage';
			nameCont.appendChild(imageDiv);
			var buttonelem = document.createElement('button');
			buttonelem.id = `playButton${i+1}`;
			imageDiv.appendChild(buttonelem);
			var imag = document.createElement('img');
			imag.src = 'Images/icons8-play-48 (2).png';
			imag.alt = 'play';
			buttonelem.appendChild(imag);

			var nameDiv = document.createElement('div');
			nameDiv.className ='songName';
			nameCont.appendChild(nameDiv);
			var songname = document.createElement('span');
			songname.id = `songTitle${i+1}`;
			nameDiv.appendChild(songname);
			var singname = document.createElement('span');
			singname.className ='artistName'
			singname.id = `artistName${i+1}`;
			nameDiv.appendChild(singname);
			
			var dur = document.createElement('div');
			dur.className = 'songDuration'
			contentDiv.appendChild(dur);
			var durat = document.createElement('span');
			durat.id = `songDuration${i+1}`;
			dur.appendChild(durat);
			
			// Adding the HTML for song player
			// var parDiv = document.getElementsByClassName('side-container');
			// Create the main container element



			const songId = `songTitle${i + 1}`;
			const songElement = document.getElementById(songId);
			if (songElement) {
			  songElement.innerHTML = response.data[i].title;
			} else {
			  console.log(`Element with ID "${songId}" not found.`);
			}
		
			const songtimeId = `songDuration${i + 1}`;
			const songdur = document.getElementById(songtimeId);
			 let mins = Math.floor(response.data[i].duration/60);
			 let secs = response.data[i].duration%60;
			 if(secs<=9){
				songdur.innerHTML = `${mins}:0${secs}`;
			 }
			 else{
			  songdur.innerHTML = `${mins}:${secs}`;
			 }



			 //Artist name

			 const artistName = document.getElementById(`artistName${i + 1}`);
			 artistName.innerHTML = response.data[i].artist.name;
			

		  }




		  
		var songPlayerContainer = document.createElement('div');
		songPlayerContainer.classList.add('songPlayer');
		// parDiv.appendChild(songPlayerContainer);
		// Create the playing animation container
		var playingAnimationContainer = document.createElement('div');
		playingAnimationContainer.classList.add('playingAnimation');

		// Create the current time element
		var currTimeElement = document.createElement('div');
		currTimeElement.classList.add('currtime');
		currTimeElement.textContent = '1:00';
		playingAnimationContainer.appendChild(currTimeElement);

		// Create the animation element
		var animationElement = document.createElement('div');
		animationElement.classList.add('animation');
		playingAnimationContainer.appendChild(animationElement);

		// Create the total time element
		var totalTimeElement = document.createElement('div');
		totalTimeElement.setAttribute('id', 'totaltime');
		playingAnimationContainer.appendChild(totalTimeElement);

		// Append the playing animation container to the main container
		songPlayerContainer.appendChild(playingAnimationContainer);

		// Create the player container
		var playerContainer = document.createElement('div');
		playerContainer.classList.add('player');

		// Create the song name element
		var songNameElement = document.createElement('div');
		songNameElement.classList.add('songName');
		playerContainer.appendChild(songNameElement);

		// Create the singer name element
		var singerNameElement = document.createElement('div');
		singerNameElement.classList.add('singerName');
		playerContainer.appendChild(singerNameElement);

		// Create the icons container
		var iconsContainer = document.createElement('div');
		iconsContainer.classList.add('icons');

		// Create the previous button
		var prevButton = document.createElement('button');
		prevButton.classList.add('prevButton');
		var prevButtonImage = document.createElement('img');
		prevButtonImage.setAttribute('src', 'Images/icons8-arrow-32.png');
		prevButtonImage.setAttribute('alt', 'Prev');
		prevButtonImage.setAttribute('id', 'prev');
		prevButton.appendChild(prevButtonImage);
		iconsContainer.appendChild(prevButton);

		// Create the play button
		var playButton = document.createElement('button');
		playButton.classList.add('playButton');
		var playButtonImage = document.createElement('img');
		playButtonImage.setAttribute('src', 'Images/icons8-play-48 (2).png');
		playButtonImage.setAttribute('alt', 'Play');
		playButtonImage.setAttribute('id', 'play');
		playButton.appendChild(playButtonImage);
		iconsContainer.appendChild(playButton);

		// Create the next button
		var nextButton = document.createElement('button');
		nextButton.classList.add('nextButton');
		var nextButtonImage = document.createElement('img');
		nextButtonImage.setAttribute('src', 'Images/icons8-next-30.png');
		nextButtonImage.setAttribute('alt', 'Next');
		nextButtonImage.setAttribute('id', 'next');
		nextButton.appendChild(nextButtonImage);
		iconsContainer.appendChild(nextButton);

		// Append the icons container to the player container
		playerContainer.appendChild(iconsContainer);

		// Append the player container to the main container
		songPlayerContainer.appendChild(playerContainer);

		// Append the main container to the document body
		document.getElementById('side-container').appendChild(songPlayerContainer);


		  

		







		//   Play button songs

		  for (let index = 0; index < 8; index++) {
			console.log(index)
			
		
			var audio = new Audio();
			
			var playButton = document.getElementById(`playButton${index+1}`);
			playButton.addEventListener("click",  function() {
				
				let trackPreview = response.data[index].preview;
				audio.src= trackPreview;
				audio.currentTime =0;
			

				let player = document.getElementsByClassName("songPlayer");
				if(player[0].style.display="none" && window.matchMedia("(min-width: 751px)").matches){
					player[0].style.display="block";
				}
				if(playing===false){
				playSong(index+1);}
				else if(playing===true && currSong===response.data[index+1].id){
					pauseSong(currSong);
				}
				else{
					pauseSong(currSong);
					playSong(index+1);
				}
				
			  });
			 
			
		}
		
		
		// let trackPreview = response.data[songIndex].preview;
		
		// 	var audio = new Audio(trackPreview);
			
			
		  
		//play Button main


		let playButtonmain = document.getElementsByClassName("playButton");
		playButtonmain[0].addEventListener("click", function(){
			if(playing===false){
				playSong(songIndex);
				
			}
			else{
				pauseSong(currSong);
				
			}
		})
 
		function pauseSong(id){
			let button = document.getElementById(`playButton${songIndex}`);
			let imageElement =button.querySelector('img');
			imageElement.src = "Images/icons8-play-48 (2).png";

			playButtonmain[0].querySelector('img').src= "Images/icons8-play-48 (2).png";

			playing=false;
			// songIndex=-1;

			audio.pause();
		}
		 function playSong(index){
			let button = document.getElementById(`playButton${index}`);
			let imageElement =button.querySelector('img');
			imageElement.src = "Images/icons8-pause-48.png";
			
			playButtonmain[0].querySelector('img').src= "Images/icons8-pause-48.png";

			let playerName= document.getElementsByClassName("songName");
			playerName[0].innerHTML = response.data[index-1].title;
			let artistName = document.getElementsByClassName("singerName");
			artistName[0].innerHTML = response.data[index-1].artist.name;
			songIndex =index;
			playing=true;
			let songid = response.data[index].id;
			currSong = songid;

			let songdur= document.getElementById("totaltime");


			
			 let mins = Math.floor(response.data[index-1].duration/60);
			 let secs = response.data[index-1].duration%60;
			 if(secs<=9){
				songdur.innerHTML = `${mins}:0${secs}`;
			 }
			 else{
			  songdur.innerHTML = `${mins}:${secs}`;
			 }

			 //playing the song
			 curaud = audio;
			 audio.play()
			 console.log(`playing the song with id ${response.data[index].artist.name}`)
			

		 }
	 })
	 .catch(err=>{
		console.error(err);
	 });
 
	}
	
	console.log(value);
	search(value)
	
	