const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aa83a74ae4mshf6930361d7a909fp1b564cjsnb0b7875a93fa',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

	const search= (artist)=>{
	 fetch(url+ artist, options)
	 .then(response=>response.json())
	 .then(response=>{
		for (let i = 0; i < 8; i++) {
			const songId = `songTitle${i + 1}`;
			const songElement = document.getElementById(songId);
			if (songElement) {
			  songElement.innerHTML = response.data[i].title;
			} else {
			  console.log(`Element with ID "${songId}" not found.`);
			}
			const imgId = `songImage${i + 1}`;
			const imageurl = response.data[i].artist.pitcure_small;
			const imageElement = document.getElementById(imgId);
			imageElement.src= imageurl;
			const songtimeId = `songDuration${i + 1}`;
			const songdur = document.getElementById(songtimeId);
			 let mins = Math.floor(response.data[i].duration/60);
			 let secs = response.data[i].duration%60;
			  songdur.innerHTML = `${mins}:${secs}`;
			
		  }
		
	 })
	//  .then(response=> {
		
		
	//  })
	 .catch(err=>{
		console.error(err);
	 });
 
	}

	search("Talha Anjum")
	