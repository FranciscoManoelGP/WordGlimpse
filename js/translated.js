function translation(search) {
    var mm_request = $.ajax({
            url: `https://api.mymemory.translated.net/get?q=${search}!&langpair=pt-br|en`,
            method: "GET",
            dataType: "Json"
        });

        mm_request.done(function( text_translated ) {
            //console.log(text_translated)
            var text = ""
            var text = text_translated.responseData.translatedText
            var new_text = text.replace(/\!/, '')
            image_search(new_text)
        });
            
        mm_request.fail(function( jqXHR, textStatus ) {
            alert( "Request failed: " + textStatus );
        });

        
}