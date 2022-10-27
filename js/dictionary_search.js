function dictionary_search(search) {
    var dic_request = $.ajax({
            url: `https://api.dicionario-aberto.net/word/${search}/1/index.html`,
            method: "GET",
            dataType: "Json"
        });

        dic_request.done(function( dictionary_result ) {
            //console.log(dictionary_result)
            if(!dictionary_result[0]){
                alert( "Request failed");
                location.reload()
            }
            var text = JSON.stringify(dictionary_result[0].xml)
            var text_formatted = text.replace(/\\n/g, "<br/>");
            text_formatted = text_formatted.replace(/\"/g, "")
            text_formatted = text_formatted.replace(/\\r/g, "")
            text_formatted = text_formatted.replace(/_/g, "")

            //console.log(text_formatted);
        
            $('#dictionary').html("")
            $('#dictionary').append(text_formatted)
        });
            
        dic_request.fail(function( jqXHR, textStatus ) {
            alert( "Request failed: " + textStatus );
            location.reload()
        });
}