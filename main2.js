$(document).ready(function() {
    $(".fruitsP, .side, .instructions, #add-button, .squish, .pestle, .squishFruit, .squishFruit2, .squishFruit3, .alert").hide();
    $(".home").click(function () {
        // $(".homeP").show();
        // $(".fruitsP").hide();
    });

//making call to get json file for index page

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

    //beginning of fruits page
        var $xhr = $.getJSON('package.json', function(data) {
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
        });
        $('ul').filter("fruitsLB").addClass('twoColumns');

        $fruitList = $.getJSON('package.json', function (data) {
            var fruitList = Object.keys(data.data).map(function (x) {
                return data.data[x].id;
            });

            console.log(fruitList);
            for (var i = 0; i < fruitList.length + 1; i++) {
                var clicks = 0;
                (function (i) {
                    //sets image to place on page
                    var $k = $(document.getElementById([i]));
                    $k.click(function () {
                        clicks++;
                        var x = document.getElementById([i]).getAttribute("src");
                        var y = document.getElementById([i]).getAttribute("id");
                        if (clicks === 1) {
                            document.getElementsByClassName("fruit-boxes-1")[0].setAttribute("src", x);
                            document.getElementsByClassName("fruit-boxes-1")[0].setAttribute("id", y);
                        } else if (clicks === 2) {
                            document.getElementsByClassName("fruit-boxes-2")[0].setAttribute("src", x);
                            document.getElementsByClassName("fruit-boxes-2")[0].setAttribute("id", y);
                        } else {
                            document.getElementsByClassName("fruit-boxes-3")[0].setAttribute("src", x);
                            document.getElementsByClassName("fruit-boxes-3")[0].setAttribute("id", y);
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
                    });//end of click function
                }(i));//end of image set function
            }
        });
    $("#add-button").click(function(){
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
        $("#add-button").stop();
        $("#add-button, .fruitL2").hide();
        $(".squish, .pestle").show();
        $(".mixLeft").css("top", "245px");
    });
//Next step after fruit is added to bowl
    var clicksV = 0;
    $(".squish").click(function() {
        clicksV++;
        var pest = $(".pestle");
            pest.animate(
                {
                    top: "195px",
                    left: "725px"
                }//, { duration: 400, queue: false }
            );
            console.log(clicksV);
            if(clicksV === 1){
                $(".squishFruit").show().animate({
                    top: "410px"
                }, 1800);
                $(".fruit-boxes-1, .fruit-boxes-2, .fruit-boxes-3").animate({
                    top: "500px"
                }, 1500);
            } else if(clicksV === 2){
                $(".fruit-boxes-1, .fruit-boxes-2, .fruit-boxes-3").hide();
                $(".squishFruit").fadeOut(900);
                $(".squishFruit2").fadeIn(800);
            } else if(clicksV === 3) {
                $(".squishFruit2").fadeOut(900);
                $(".squishFruit3").fadeIn(800);
            } else {
                $(".alert").show();
                $fruitFlav = $.getJSON('package.json', function (data) {

                    var fruitA = document.getElementsByClassName("fruit-boxes-1")[0].getAttribute("id");
                    var fruitB = document.getElementsByClassName("fruit-boxes-2")[0].getAttribute("id");
                    var fruitC = document.getElementsByClassName("fruit-boxes-1")[0].getAttribute("id");

                    var fruitChoice = [fruitA, fruitB, fruitC];
                    var numA = Math.floor(Math.random() * 3);
                    var numB = Math.floor(Math.random() * 3);
                    var fruitChoiceA = Number(fruitChoice[numA]);

                    var fruitId = Object.keys(data.data).map(function (x) {
                        return data.data[x].id;
                    });

                    var ids = fruitId.indexOf(fruitChoiceA);

                    var fruitFlav = data.data[ids].flavor;

                    document.getElementById("word").innerHTML = fruitFlav[numB];
                });
            }

            pest.animate({
                top: "20px",
                left: "738px"
            }); //, { duration: 300, queue: false });

            pest.animate({
                top: "210px",
                left: "790px"
            }); //, { duration: 400, queue: false });

            pest.animate({
                top: "20px",
                left: "738px"
            });//, { duration: 400, queue: false });

    });
});


// document.getElementById("fruitsL").innerHTML = output;
