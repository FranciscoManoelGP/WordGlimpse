function image_search(search) {
    var px_api_key = "563492ad6f91700001000001d4c0c34cd12044af9257625c1d8ace75"
    var num_pages = 5

    var px_request = $.ajax({
        url: "https://api.pexels.com/v1/search?query="+search+"&per_page="+num_pages,
        method: "GET",
        dataType: "Json",
        headers:{
            Authorization: `Bearer ${px_api_key}`
        }
        });

        px_request.done(function( img_result ) {
            //console.log(img_result)
            var image = []
            var photographer = []
            for (let i = 0; i < num_pages; i++) {
                if(!img_result.photos[i]){
                    alert( "Request failed");
                    location.reload()
                }
                image[i] = img_result.photos[i].src.tiny
                photographer[i] = img_result.photos[i].photographer_url
                $('#image'+i).html(`<img src=${image[i]}>`)
                if(i != 0)
                    $('#image'+i).hide()
                if(i == 0){
                    $('#image'+i).show()
                    $('#link').attr('href', photographer[i])
                }
                
            }

            new_image(image, photographer)
        });
            
        px_request.fail(function( jqXHR, textStatus ) {
            alert( "Request failed: " + textStatus );
        });
        
}

function new_image(image, photographer) {
    const len = image.length;
    let i = 0
    let x = 1

    $('#change').off("click").on("click", function () {
        $('#image'+(i % len)).hide()
        $('#image'+(x % len)).show()
        $('#link').attr('href', photographer[i])
        //console.log(`image[${x}] = ${image[i % len]}`)
        i++
        x++   
    })
} 