$(document).ready(function () {
    $("#getDog").click(function () {
        $.ajax({
            url: "https://dog.ceo/api/breeds/image/random",
            method: "GET",
            success: function (response) {
                console.log(response);
                var imgLocation = response.message;
                var img = "<img src='" + imgLocation + "' class='img-thumbnail' style='width: 200px; height: 200px;'>";
                $("#dogContainer").html(img);
            },
            error: function () {
                $("#dogContainer").text("Error al cargar del perro.");
            },
        });
    });
});
