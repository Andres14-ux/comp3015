$(document).ready(function (){
    $('form').submit(function(evnt){
    let user = $('#user').val();
    let pwd = $("#pwd").val();

    if (user == 'bruceW@gmail.com' && pwd == "secreto") {
        alert('Welcome!');
    } else {
        alert("User or Password incorrect!");
    }
    })
})