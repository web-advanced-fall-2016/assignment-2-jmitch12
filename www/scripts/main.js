// /* eslint-env es6*/
// (function() {
// 	let baseURL = "http://148.75.251.185:8888";
//    	let index = 0;
//     let content = document.querySelector('#name');
//     let index = 0;
//     let jqueryButton = document.querySelector('.student');
//     let studentGrid = document.querySelector('.student-grid');

//     $.ajax({
//         method: "GET",
//         url: baseURL+'/students'
//     })
//     .done(function(response) {
        
//         for( let i = 0 ; i <response.length ; i++){
//             $.ajax({
//                 url: baseURL+"/students/"+response[i].id,
//                 method: "GET"
//             }).done(function(response){
//                 let newDiv = document.createElement('div');
//                 let newImg = document.createElement('img');
//                 newImg.src = baseURL+response.profile_picture;
//                 newDiv.classList.add('student');
//                 newDiv.appendChild(newImg);
//                 studentGrid.appendChild(newDiv);
//             });
//         }

//     });
	
// 	mainGrid.addEventListener('click',function(evnt){
// 		if( evnt.target.classList.contains('thumb')){
			
// 			$.ajax({
// 				method: "GET",
// 				url: URL+'/students/'+evnt.target.dataset.id,
// 			}).done(function(response){
// 				document.querySelector('#myModal .modalContent .name').innerText =  response.first_name + " " + response.last_name;
// 				// document.querySelector('#myModal .modalContent)
// 				document.querySelector('#myModal .modalContent .email').innerText =  response.email;
// 				document.querySelector('#myModal .modalContent .exerpt').innerText =  response.excerpt;
// 				// document.querySelector('#myModal .modalContent .links').innerText =  response.links;
// 				// document.querySelector('#myModal .modalContent .profile_picture').innerText =  response.image.excerpt;
// 				modal.style.display = "block";
// 			});
// 		}
		
// 	});
// })();