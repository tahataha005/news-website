$(document).ready(function(){

        $.getJSON("http://localhost/news-website/backend/get_new.php",function(data){
            console.log(data)
        })
    })
