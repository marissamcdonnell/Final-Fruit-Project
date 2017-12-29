$(document).ready(function() {
    $(".fruitsP, .side, .mix, .instructions, #add-button").hide();
    $(".home").click(function () {
        $(".homeP").show();
        $(".fruitsP, .mix").hide();
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
    });
    $(".fruits").click(function () {
        $(".mix").show();
        $(".homeP, .side").hide();
        var $xhr = $.getJSON('package.json', function (data) {
            if ($xhr.status !== 200) {
            }
            var fruits = data.data;
            var fruitL = "<ul>";
            for (var i in fruits) {
                fruitL += "<li>" + "<img id=" + fruits[i].id + " src=" + fruits[i].url + ">" + fruits[i].name + "</li>";
            }
            fruitL += "</ul>";
            $('ul').filter("fruitsLB").addClass('twoColumns');
            document.getElementById("fruitsLB").innerHTML = fruitL;
            // var fruitList = Object.keys(fruits).map(function(x){
            //     return fruits[x].id;
            // });
            // console.log(fruitList);
        });
        $('ul').filter("fruitsLB").addClass('twoColumns');


        $fruitList = $.getJSON('package.json', function (data) {
            var fruitList = Object.keys(data.data).map(function (x) {
                return data.data[x].id;
            });

            console.log(fruitList.length);
            for (var i = 0; i < fruitList.length + 1; i++) {
                var clicks = 0;
                (function (i) {
                    //sets image to place on page
                    var $k = $(document.getElementById([i]));
                    $k.click(function () {
                        clicks++;
                        var x = document.getElementById([i]).getAttribute("src");
                        if (clicks === 1) {
                            document.getElementsByClassName("fruit-boxes-1")[0].setAttribute("src", x);
                        } else if (clicks === 2) {
                            document.getElementsByClassName("fruit-boxes-2")[0].setAttribute("src", x);
                        } else {
                            document.getElementsByClassName("fruit-boxes-3")[0].setAttribute("src", x);
                            clicks = 0;
                            var but = $("#add-button");
                            but.show();
                            //flashing button
                            function runIt(){
                                but.animate({opacity: '+=1'}, 1000);
                                but.animate({opacity: '-=0.5'}, 1000, runIt)
                            } runIt();
                            $("#clickhide").hide();

                        }
                        but.click(function(){
                            $(".fruit-boxes-1").animate({
                                top: '472px',
                                left: '691px'
                            }, 600);
                            $(".fruit-boxes-2").animate({
                                top: '484px',
                                left: '776px'
                            }, 600);
                            $(".fruit-boxes-3").animate({
                                top: '482px',
                                left: '900px'
                            }, 600);
                        })
                    });//end of click function
                }(i));//end of image set function
            }
        });
    });

});


// document.getElementById("fruitsL").innerHTML = output;
