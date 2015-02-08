$(document).ready(function () {
    $("div.container").append("<header></header>");
    $("header").css({
        "width": "100%",
        "height": "50px",
        "background-color": "rgba(80, 69, 69, 0.26)",
        "margin": "auto auto",
        "text-align": "center",
        "border-bottom": "2px solid rgba(80, 69, 69, 0.37)",
        "position":"fixed"

    });
    $("header").hide();
    $("div.container").hover(function(){
        $("header").stop();
        $("header").fadeIn("fast");


    },function(){

    $("header").fadeOut(5000);
    });


    $("header").append("<ul></ul>");
    $("ul").append("<li>Home</li>");
    $("ul").append("<li>Menu</li>");
    $("ul").append("<li>New Added</li>");
    $("ul").append("<li>Offer</li>");
    $("ul").append("<li>Cart</li>");
    $("ul").append("<li>Track</li>");
    $("ul").append("<li>Contact</li>");

    $("div.container").append("<div class='main'></div>");
    $("div.main").css({
        "width": "100%",
        "height": "1000px",
        "text-align": "left",
        "background-color": "rgba(208, 169, 65, 0.74)",
        "background-image": "url(Images/main.jpg)",
        "background-position": "top center",
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "color": "rgba(0, 0, 0, 0.79)",
        "font-style": "italic",
        "line-height": "25px"

    });









    $("div.container").append("<div class='home'></div>");
    $("div.home").css({
        "width": "100%",
        "height": "800px",
        "text-align": "left",
        "background-color": "rgba(208, 169, 65, 0.74)",
        "background-image": "url(Images/Restaurant.jpg)",
        "background-position": "top center",
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "color": "rgba(0, 0, 0, 0.79)",

        "font-style": "italic",
        "line-height": "25px"

    });

    $(".home").append("<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,</p>");

    $("p").css({
        "padding-top": "50px",
        "padding-left": "50px",
        "width": "40%"

    });

    $("div.home").hide();
    $("div.container").append("<div class='Menu'></div>");

    $("div.Menu").css({
        "width": "100%",
        "height": "800px",
        "text-align": "center",
        "background-color": "rgba(65, 180, 208, 0.74)",

        "background-image": "url(Images/Menu.jpg)",
        "background-position": "top center",
        "background-size": "cover",
        "background-repeat": "no-repeat"

    });

    $(".Menu").append("<div><p>Menu Items are Going to Change. Wait For new THRILL</p></div>");

    $(".Menu>div").css({
        "height":"100px",
        "width":"60%",
        "background-color": "rgba(209, 186, 55, 0.66)",
        "opacity":"0.8",
       "line-height":"50px",
       "position":"relative",
        "border":"2px solid rgba(209, 186, 55, 0.66)",
        "top":"350px",
        "left":"150px",
     "-webkit-transform": "rotate(325deg)",
"-moz-transform": "rotate(340deg)",
"-o-transform": "rotate(325deg)"

    });




    $(".Menu>div>p").css({

     "color": "rgba(69, 77, 180, 0.74)",
        "font-size": "30px",
        "font-weight": "bold",

        "text-shadow": "2px 2px rgba(82, 144, 172, 0.61)"
    });
    $("div.Menu").hide();
    $("div.container").append("<div class='Added'></div>");
    $("div.Added").css({
        "width": "100%",
        "height": "800px",
        "text-align": "center",
        "background-color": "rgba(65, 208, 180, 0.74)",
        "background-image": "url(Images/Added.jpg)",
        "background-position": "top center",
        "background-size": "cover",
        "background-repeat": "no-repeat"

    });
    $("div.Added").hide();
    $("div.container").append("<div class='Offer'></div>");
    $("div.Offer").css({
        "width": "100%",
        "height": "800px",
        "text-align": "center",
        "background-color": "rgba(109, 208, 65, 0.74)",

        "background-position": "top center",
        "background-size": "cover",
        "background-repeat": "no-repeat"

    });
    $(".Offer").append("<img src='Images/Offer.jpg' />");
    $(".Offer").append("<p>You don't have any Offer for Today. You can try again later</p>");
    $(".Offer>p").css({

        "color": "#000aff",
        "font-style": "italic",
        "font-size": "30px"
    });
    $("div.Offer").hide();
    $("div.container").append("<div class='Cart'></div>");
    $("div.Cart").css({
        "width": "100%",
        "height": "800px",
        "text-align": "center",
        "background-color": "rgba(65, 125, 208, 0.52)",

        "background-position": "top center",
        "background-size": "cover",
        "background-repeat": "no-repeat"

    });
    $(".Cart").append("<img src='Images/Cart.gif' />");
    $(".Cart").append("<p>You cart is empty. Please add some delicious items from menu</p>");
    $(".Cart>p").css({
        "padding-top": "2%",
        "color": "#a700ff",

        "font-size": "30px"
    });
    $("div.Cart").hide();
    $("div.container").append("<div class='Track'></div>");
    $("div.Track").css({
        "width": "100%",
        "height": "800px",
        "text-align": "center",
        "background-color": "rgba(120, 65, 208, 0.46)",

        "background-position": "top center",
        "background-size": "cover",
        "background-repeat": "no-repeat"

    });
    $(".Track").append("<img src='Images/Track1.jpg' />");
    $(".Track").append("<p>Tracking service is in progress. You can call our customer care to track your order</p>");
    $(".Track>p").css({
        "padding-top": "2%",
        "color": "#3e0c45",

        "font-size": "30px"
    });

    $("div.Track").hide();
    $("div.container").append("<div class='Contact'></div>");
    $("div.Contact").css({
        "width": "100%",
        "height": "700px",
        "text-align": "center",
        "background-color": "rgba(208, 65, 175, 0.74)",

        "background-position": "top center",
        "background-repeat": "no-repeat"

    });
    $(".Contact").append("<img src='Images/contact.png' />");
    $(".Contact").append("<p>This is a dummy Website<br>Designed By: Meher Chandan<br>You can contact me on:meherchandan12@gmail.com</p>");
    $(".Contact>p").css({

        "color": "#3e0c45",
        "text-align": "left",
        "font-size": "20px",
        "line-height": "50px"
    });

    $("div.Contact").hide();

    $("img").css({
        "padding-top": "100px"
    });

    $("li").css({
        "display": "inline",
        "padding": "10px",
        "position": "relative",
        "top": "15px",
        "border-radius": "10px",
        "background-color": "rgba(227, 57, 57, 0.76)",
        "color": "white",
        "margin-left": "50px"

    });
    $("li").hover(function () {
        $(this).css({

            "background-color": "rgb(216, 0, 0)"
        });
        $(this).animate({
            "border-radius": "+=20px",

        });

    }, function () {
        $(this).css({
            "color": "white",
            "background-color": "rgba(227, 57, 57, 0.76)"
        });
        $(this).animate({
            "border-radius": "10px"

        });
    });

    $("li").eq(0).click(function () {
        $("div.home").fadeIn();
        $("div.Menu").hide();
        $("div.Offer").hide();
        $("div.Cart").hide();
        $("div.Track").hide();
        $("div.Contact").hide();
        $("div.main").hide();
    });
    $("li").eq(1).click(function () {
        $("div.home").hide();
        $("div.Menu").fadeIn();
        $("div.Added").hide();
        $("div.Offer").hide();
        $("div.Cart").hide();
        $("div.Track").hide();
        $("div.Contact").hide();
        $("div.main").hide();
    });
    $("li").eq(2).click(function () {
        $("div.home").hide();
        $("div.Menu").hide();
        $("div.Added").fadeIn();
        $("div.Offer").hide();
        $("div.Cart").hide();
        $("div.Track").hide();
        $("div.Contact").hide();
        $("div.main").hide();
    });
    $("li").eq(3).click(function () {
        $("div.home").hide();
        $("div.Menu").hide();
        $("div.Added").hide();
        $("div.Offer").fadeIn();
        $("div.Cart").hide();
        $("div.Track").hide();
        $("div.Contact").hide();
        $("div.main").hide();
    });
    $("li").eq(4).click(function () {
        $("div.home").hide();
        $("div.Menu").hide();
        $("div.Added").hide();
        $("div.Offer").hide();
        $("div.Cart").fadeIn();
        $("div.Track").hide();
        $("div.Contact").hide();
        $("div.main").hide();
    });
    $("li").eq(5).click(function () {
        $("div.home").hide();
        $("div.Menu").hide();
        $("div.Added").hide();
        $("div.Offer").hide();
        $("div.Cart").hide();
        $("div.Track").fadeIn();
        $("div.Contact").hide();
        $("div.main").hide();
    });
    $("li").eq(6).click(function () {
        $("div.home").hide();
        $("div.Menu").hide();
        $("div.Added").hide();
        $("div.Offer").hide();
        $("div.Cart").hide();
        $("div.Track").hide();
        $("div.Contact").fadeIn();
        $("div.main").hide();
    });




});
