$(document).ready(function(){

        $.getJSON("http://localhost/news-website/backend/get_new.php",function(data){
            for(let i =0;i<data.length;i++){
              console.log(i)
              $("#newsContainer").append(`<div class="card">
              <div class="card-header">
                ${data[i].title}
              </div>
              <div class="card-body">
                <p class="card-text">${data[i].content}</p>
              </div>
              <div class="card-footer text-muted d-flex bg-dark justify-content-center align-items-center">
                <p class="text-primary">${data[i].time}</p>
              </div>
            </div>`)
          }
        })
    })
            

   
