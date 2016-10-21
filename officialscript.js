$(document).ready(function () {
    console.log("Hello jQuery");

    $("h2").click(function () {
        console.log("You clicked an h1");
    });

    $(".cathexpander h2").click(function () {
        // Basically, the function added after "normal" here is what happens when the slideToggle is done.
        // We want to wait until the slideToggle is done so that it's at its full height before we get its height to set the back element.
        $(this).parent().find("p").slideToggle("normal", function () {
            $(".cathedralback").css("height", $(".cathedralfront").css("height"));
            // I moved this here, so that when the expander is clicked, the "cathedralback" is expanded as well
        });
    });

    $(".capexpander h2").click(function () {
        $(this).parent().find("p").slideToggle("normal", function () {
            $(".capback").css("height", $(".capfront").css("height"));
        });
    });

    $(".glacexpander h2").click(function () {
        $(this).parent().find("p").slideToggle("normal", function () {
            $(".glacierback").css("height", $(".glacierfront").css("height"));
        });
    });

    $(".domexpander h2").click(function () {
        $(this).parent().find("p").slideToggle("normal", function () {
            $(".domeback").css("height", $(".domefront").css("height"));
        });
    });


    $("#cathflipButton").click(function () {
        $(".cathexpander").toggleClass("flipped");
    });

    $("#capflipButton").click(function () {
        $(".capexpander").toggleClass("flipped");
    });

    $("#glacflipButton").click(function () {
        $(".glacexpander").toggleClass("flipped");
    });
    $("#domflipButton").click(function () {
        $(".domexpander").toggleClass("flipped");
    });

    /******** NEW ********/
    $("#cathcloseButton").click(function () {
        $(".cathexpander").toggleClass("flipped"); // Note that right now this toggles the class for every .expander...
        // You'd probably want to give each expander an ID and give each their close buttons related IDs and match accordingly.
        // There are more elegant ways to do this...but that would work at least
    });

    $("#capcloseButton").click(function () {
        $(".capexpander").toggleClass("flipped");
    });

    $("#glaccloseButton").click(function () {
        $(".glacexpander").toggleClass("flipped");
    });

    $("#domcloseButton").click(function () {
        $(".domexpander").toggleClass("flipped");
    });

});






