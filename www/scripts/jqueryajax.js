/* eslint-env es6*/
let modal = document.getElementById('myModal');
let span = document.getElementsByClassName("open")[0];
let images = document.querySelectorAll('.students');
let info = document.querySelectorAll('.info');

(function() {
    let baseURL = "http://148.75.251.185:8888";
    let content = document.querySelector('#name');
    let index = 0;
    let jqueryButton = document.querySelector('.image');
    let student = document.querySelector('.student');
    let studentGrid = document.querySelector('.student-grid');
    
    $.ajax({
        method: "GET",
        url: baseURL+'/students'
    })
    .done(function(response) {
        
        for( let i = 0 ; i <response.length ; i++){
            $.ajax({
                url: baseURL+"/students/"+response[i].id,
                method: "GET"
            }).done(function(response){
                let newDiv = document.createElement('div');
                let newImg = document.createElement('img');
                newImg.src = baseURL+response.profile_picture;
                newDiv.classList.add('student');
                newImg.classList.add('thumb');
                newDiv.appendChild(newImg);
                studentGrid.appendChild(newDiv);
            });
        }

    });

    studentGrid.addEventListener('click', function(evnt) {
        console.log("broken");
       if( evnt.target.classList.contains('.student')){
            
            $.ajax({
                method: "GET",
                url: URL+'/students/' + evnt.target.dataset.id,
            }).done(function(response){
                document.querySelector('#myModal .modalContent .name').innerText =  response.first_name + " " + response.last_name;
                // document.querySelector('#myModal .modalContent)
                document.querySelector('#myModal .modalContent .email').innerText =  response.email;
                document.querySelector('#myModal .modalContent .exerpt').innerText =  response.excerpt;
                // document.querySelector('#myModal .modalContent .links').innerText =  response.links;
                // document.querySelector('#myModal .modalContent .profile_picture').innerText =  response.image.excerpt;
                modal.style.display = "block";
            });
        }

            //.always(); or .error(function(){});
    });
    
   
 })();

span.addEventListener('click',function(){
    modal.style.display = "none";
});

span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}