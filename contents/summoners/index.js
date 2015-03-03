var summoners = {

    searchByName: function(name) {

        // search legislators by name
        // ref: https://sunlightlabs.github.io/congress/committees.html
        $.get("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/"+name+"?api_key="+apikey, function(data) {

            $.get("/LeagueStats/summoners/details.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#details").html(html)
                $("#list").html("")
            })

        })

    },
    featuredGames: function() {

        $.get("https://na.api.pvp.net/observer-mode/rest/featured?api_key="+apikey, function(data) {
            $.get("/LeagueStats/summoners/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data.gameList
                })
                $("#details").html("")
                $("#list").html(html)
            })

        })
    },

    load: function() {

        $.get("/LeagueStats/summoners/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })
        summoners.featuredGames()

    }

}