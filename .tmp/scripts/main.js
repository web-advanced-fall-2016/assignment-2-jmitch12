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
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLyogZXNsaW50LWVudiBlczYqL1xuLy8gKGZ1bmN0aW9uKCkge1xuLy8gXHRsZXQgYmFzZVVSTCA9IFwiaHR0cDovLzE0OC43NS4yNTEuMTg1Ojg4ODhcIjtcbi8vICAgIFx0bGV0IGluZGV4ID0gMDtcbi8vICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG4vLyAgICAgbGV0IGluZGV4ID0gMDtcbi8vICAgICBsZXQganF1ZXJ5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0dWRlbnQnKTtcbi8vICAgICBsZXQgc3R1ZGVudEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3R1ZGVudC1ncmlkJyk7XG5cbi8vICAgICAkLmFqYXgoe1xuLy8gICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4vLyAgICAgICAgIHVybDogYmFzZVVSTCsnL3N0dWRlbnRzJ1xuLy8gICAgIH0pXG4vLyAgICAgLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgXG4vLyAgICAgICAgIGZvciggbGV0IGkgPSAwIDsgaSA8cmVzcG9uc2UubGVuZ3RoIDsgaSsrKXtcbi8vICAgICAgICAgICAgICQuYWpheCh7XG4vLyAgICAgICAgICAgICAgICAgdXJsOiBiYXNlVVJMK1wiL3N0dWRlbnRzL1wiK3Jlc3BvbnNlW2ldLmlkLFxuLy8gICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIlxuLy8gICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSl7XG4vLyAgICAgICAgICAgICAgICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgICAgICAgICAgICAgIGxldCBuZXdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbi8vICAgICAgICAgICAgICAgICBuZXdJbWcuc3JjID0gYmFzZVVSTCtyZXNwb25zZS5wcm9maWxlX3BpY3R1cmU7XG4vLyAgICAgICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ3N0dWRlbnQnKTtcbi8vICAgICAgICAgICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3SW1nKTtcbi8vICAgICAgICAgICAgICAgICBzdHVkZW50R3JpZC5hcHBlbmRDaGlsZChuZXdEaXYpO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgIH0pO1xuXHRcbi8vIFx0bWFpbkdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGV2bnQpe1xuLy8gXHRcdGlmKCBldm50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RodW1iJykpe1xuXHRcdFx0XG4vLyBcdFx0XHQkLmFqYXgoe1xuLy8gXHRcdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG4vLyBcdFx0XHRcdHVybDogVVJMKycvc3R1ZGVudHMvJytldm50LnRhcmdldC5kYXRhc2V0LmlkLFxuLy8gXHRcdFx0fSkuZG9uZShmdW5jdGlvbihyZXNwb25zZSl7XG4vLyBcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteU1vZGFsIC5tb2RhbENvbnRlbnQgLm5hbWUnKS5pbm5lclRleHQgPSAgcmVzcG9uc2UuZmlyc3RfbmFtZSArIFwiIFwiICsgcmVzcG9uc2UubGFzdF9uYW1lO1xuLy8gXHRcdFx0XHQvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlNb2RhbCAubW9kYWxDb250ZW50KVxuLy8gXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlNb2RhbCAubW9kYWxDb250ZW50IC5lbWFpbCcpLmlubmVyVGV4dCA9ICByZXNwb25zZS5lbWFpbDtcbi8vIFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215TW9kYWwgLm1vZGFsQ29udGVudCAuZXhlcnB0JykuaW5uZXJUZXh0ID0gIHJlc3BvbnNlLmV4Y2VycHQ7XG4vLyBcdFx0XHRcdC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteU1vZGFsIC5tb2RhbENvbnRlbnQgLmxpbmtzJykuaW5uZXJUZXh0ID0gIHJlc3BvbnNlLmxpbmtzO1xuLy8gXHRcdFx0XHQvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlNb2RhbCAubW9kYWxDb250ZW50IC5wcm9maWxlX3BpY3R1cmUnKS5pbm5lclRleHQgPSAgcmVzcG9uc2UuaW1hZ2UuZXhjZXJwdDtcbi8vIFx0XHRcdFx0bW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbi8vIFx0XHRcdH0pO1xuLy8gXHRcdH1cblx0XHRcbi8vIFx0fSk7XG4vLyB9KSgpOyJdfQ==
