$(document).ready(function() {
    $(".fruitsP, .side, .mix, .instructions").hide();
    $(".home").click(function () {
        $(".homeP").show();
        $(".fruitsP, .mix").hide();
    });
    $(".fruits").click(function () {
        $(".fruitsP").show();
        $(".homeP, .side, .mix").hide();
    });
//making call to get json file

    $("#sideFruits").click(function() {
        $(".side").show('fruitsAZ');
        var $xhr = $.getJSON('package.json', function(data) {
            if ($xhr.status !== 200) {
            }
            var fruits = data.data;
            var fruitL = "<ul>";
            for (var i in fruits) {
                fruitL += "<li>" + "<img src=" + fruits[i].url + "> " +  fruits[i].name + "</li>";
            }
            fruitL += "</ul>";
            console.log(fruitL);
            document.getElementById("fruitsL").innerHTML = fruitL;
        });
        $(".homeP").hide();
        $(".instructions").show();
    });

    $("#getStarted").click(function() {
        $(".body, .side").hide();
        $(".mix").show();
        var $xhr = $.getJSON('package.json', function(data) {
            if ($xhr.status !== 200) {
            }
            var fruits = data.data;
            var fruitL = "<ul>";
            for (var i in fruits) {
                fruitL += "<li>" + "<img src=" + fruits[i].url + "> " + fruits[i].name + "</li>";
            }
            fruitL += "</ul>";
            $('ul').filter("fruitsLB").addClass('twoColumns');
            document.getElementById("fruitsLB").innerHTML = fruitL;
        });
        $('ul').filter("fruitsLB").addClass('twoColumns');
    })

});


// document.getElementById("fruitsL").innerHTML = output;
