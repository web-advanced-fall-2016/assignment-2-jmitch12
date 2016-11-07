(function() {
    let baseURL = "http://148.75.251.185:8888/students";
    // let URL = "http://http://149.31.120.170:3000/students/";
    let content = document.querySelector('#name');
    let index = 0;
    let jqueryButton = document.querySelector('.teacher');

    jqueryButton.addEventListener('click', function() {
        $.ajax({
                method: "GET",
                url: baseURL
            })
            .done(function(response) {
                // console.log(response);
                // console.log(response[0].first_name + ' ' + response[0].last_name);
                content.innerText = response[0].first_name + ' ' + response[0].last_name;
            });

            //.always(); or .error(function(){});
    });
})();

    // let nextButton = document.querySelector('.next');
    // nextButton.addEventListener + ('click', function(){
    //      $.ajax({
    //             method: "GET",
    //             url: URL
    //         })
    //         .done(function(response) {
    //             console.log(response[0]);
    //             content.innerText = response[++index].name;
    //         });

            //.always(); or .error(function(){});
//     });


//     let previousButton = document.querySelector('.previous');
// })();