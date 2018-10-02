$(document).ready(() => {

	console.log("Sanity Check: JS is working!");


	const handleSuccesAlbums = (json) => {
		let container = $('.container');
		for(let i = 0; i < json.lenght; i++) {

		}
	}; 


  $.ajax({
   method: 'GET',
   url: 'http://localhost:3000/api/albums',
   sucess: handleSuccesAlbums,
   error: handleError
 	});

});

