/* eslint-env es6*/
let modal = document.getElementById('myModal');
let span = document.getElementsByClassName("open")[0];
let images = document.querySelectorAll('.image');
let info = document.querySelectorAll('.info');

(function() {
    let baseURL = "http://148.75.251.185:8888";
    let content = document.querySelector('#name');
    let index = 0;
    let jqueryButton = document.querySelector('.image');
    let student = document.querySelector('.image');
    let studentGrid = document.querySelector('.student-grid');
    

    studentGrid.addEventListener('click', function(evnt) {
        console.log("working");
       if( evnt.target.classList.contains('thumb')){
            
            $.ajax({
                method: "GET",
                url: baseURL+'/students/'+evnt.target.dataset.id,
            }).done(function(response){
                document.querySelector('#myModal .modalContent .name').innerText =  response.first_name + " " + response.last_name;
                // document.querySelector('#myModal .modalContent)
                document.querySelector('#myModal .modalContent .email').innerText =  response.email;
                
                $.ajax({
                    method: "GET",
                    url: baseURL + '/student/' + evnt.target.dataset.id + "/bio",
                }) .done(function(response){
                    document.querySelector('#myModal .modalContent .bio').innerText =  response.full_bio;
                    modal.style.display = "block";
                });

                document.querySelector('#myModal .modalContent .exerpt').innerText =  response.excerpt;
                // document.querySelector('#myModal .modalContent .links').innerText =  response.links;
                modal.style.display = "block";
            });
        }

            //.always(); or .error(function(){});
    });

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
                newDiv.classList.add('image');

                newImg.dataset.id = response.id;
                newImg.classList.add('thumb');
                newDiv.appendChild(newImg);
                studentGrid.appendChild(newDiv);
            });
        }

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