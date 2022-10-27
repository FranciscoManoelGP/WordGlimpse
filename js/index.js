$(document).ready(function () {
    $("#form").off("submit").on("submit", function (event) {
        event.preventDefault()

        var search = $("#search").val()

        //image_search(search)
        translation(search)
        dictionary_search(search)      
    })
})