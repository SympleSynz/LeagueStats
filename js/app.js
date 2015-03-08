$( "#summoners" ).on( "click", function( event ) {
    $("#list").html("")
    $("#details").html("")
    summoners.load()
})

$( "#champions" ).on( "click", function( event ) {
    $("#list").html("")
    $("#details").html("")
    champions.load()
})

// TODO: add loaders for more features