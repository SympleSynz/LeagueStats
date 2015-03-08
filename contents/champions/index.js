var champions = {

    searchByName: function(ID) {

        // search legistalors by name
        // ref: https://sunlightlabs.github.io/congress/legislators.html
        $.get("https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/"+ID+"?api_key="+apikey, function(data) {

            $.get("/LeagueStats/champions/details.jade", function(template) {
                var html = jade.render(template, {
                    data: data
                })
                $("#list").html("")
                $("#details").html(html)
                $("#details2").html("")
            })

        })

    }, 
    listChampions: function() {
        $.get("https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key="+apikey, function(data) {
            $.get("/LeagueStats/champions/list.jade", function(template) {
                var html = jade.render(template, {
                    data: data.data
                })
                $("#details").html("")
                $("#list").html(html)
                $("#details2").html("")
            })

        })
    },  

    load: function() {

        $.get("/LeagueStats/champions/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })
        champions.listChampions()

    }

}