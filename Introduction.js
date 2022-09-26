// ************************************** What Is Jquery ************************************** 
// (1) Light Weight Javascript Library To Do More While Wright Less 
// (2) Library Contains Different Javascript Function To Do DOM Manipulation  

// ************************************** Why Jquery ************************************** 
// (1) Short Selectors 
// (2) Simple Syntax 

// ************************************** Jquery Basic Syntax ************************************** 

// $(document).ready(function(){
// // Code
// })

// $(document).ready(function () {
//     let box1 = $("#box-1").html()
//     console.log(box1);

//     let box2 = $("#box-2").html()
//     console.log(box2);
// })

// ************************************** Jquery Selectors ************************************** 

// (1) Select By Id: $("#idName")
// (2) Select By Class: $("#className")
// (3) Select By Tag: $("#tagName")
// (4) Select All Element: $("*")
// (5) Select Child Element In Class: $(".parentElementClassName .childElementClassName")
// (6) Select Multiple Element: $(".elementOne , .elementTwo")


$(document).ready(function () {


    // ******************* Select By Id *******************


    // let mainHeading = $("#mainHeading")

    // mainHeading.css("backgroundColor", "blue")


    // ******************* Select By Class *******************


    // let ul = $(".list-group")

    // ul.css("border", "2px solid blue")

    // let li = $(".list-group .list-group-item")

    // li.css("border", "2px solid blue")


    // ******************* Select By Tag *******************


    // let cardHeading = $(".card h3")

    // cardHeading.css("color", "blue")


    // ******************* Select Specific Tag *******************


    // let liNumber = $(".list-group .list-group-item:nth-child(2)")

    // liNumber.css("border", "2px solid blue")


    // ******************* Select All Tag *******************


    // let allElement = $("*")

    // allElement.css("border", "2px solid blue")
})



// ************************************** Jquery Mouse Events ************************************** 

// (1) click
// (2) dblclick
// (3) contextmenu
// (4) mouseenter
// (5) mouseleave


$(document).ready(function () {


    // ******************* Click Mouse Event *******************


    // let btn = $(".btn-primary").click(function(){
    //     let card = $(".card")
    //     card.css("color", "#fff")
    // })


    // ******************* Double Click Mouse Event *******************


    // let btn = $(".btn-primary").dblclick(function(){
    //     let card = $(".card")
    //     card.css("color", "#000")
    // })


    // ******************* Right Click Mouse Event *******************


    // let btn = $(".btn-primary").contextmenu(function(){
    //     let card = $(".card")
    //     card.css("color", "blue")
    // })


    // ******************* Mouse Enter Event *******************


    // let btn = $(".btn-primary").mouseenter(function(){
    //     let card = $(".card")
    //     card.css("color", "red")
    // })


    // ******************* Mouse Leave Event *******************


    // let btn = $(".btn-primary").mouseleave(function(){
    //     let card = $(".card")
    //     card.css("color", "purple")
    // })


})

// ************************************** Jquery Keyboard Events ************************************** 

// (1) keypress
// (2) keydown
// (3) keyup


$(document).ready(function () {


    // ******************* Keypress Keyboard Event *******************


    // $("body").keypress(function () {
    //     $(".card").css("background-color", "blue")
    // })

    // // OR 

    // ******************* Keydown Keyboard Event *******************


    // $("body").keydown(function () {
    //     $(".card").css("background-color", "blue")
    // })


    // ******************* Keyup Keyboard Event *******************


    // $("body").keyup(function () {
    //     $(".card").css("background-color", "skyblue")
    // })


})


// ************************************** Jquery Form Events ************************************** 

// (1) focus
// (2) blur
// (3) select
// (4) change
// (5) submit


$(document).ready(function () {


    // ******************* Focus Form Event *******************


    // $("input[type=email] , input[type=password]").focus(function () {
    //     $(this).css("background-color", "#eee")
    // })


    // ******************* Blur Form Event *******************


    // $("input[type=email] , input[type=password]").blur(function () {
    //     $(this).css("background-color", "#fff")
    // })


    // ******************* Select Form Event *******************


    // $("input[type=email] , input[type=password]").select(function () {
    //     $(this).css("background-color", "#e8e8e8e8")
    // })


    // ******************* Change Form Event *******************


    // $("#inputState").change(function () {
    //     console.log(this.value);
    // })


    // ******************* Submit Form Event *******************


    // $("#form").submit(function (e) {
    //     e.preventDefault()
    //     console.log("Name: ",$("input[type=email]").val());
    //     console.log("Password: ",$("input[type=password]").val());
    //     console.log("State: ",$("#inputState").val());
    // })

})

// ************************************** Jquery Window Events ************************************** 


// (1) scroll
// (2) resize


$(document).ready(function () {


    // ******************* Scroll Form Event *******************


    // $(window).scroll(function(){
    //     console.log(window.scrollY);
    // })

    // $(".box-item").scroll(function () {
    //     console.log("Box Scrolling");
    // })


    // ******************* Resize Form Event *******************


    // $(window).resize(function () {
    //     console.log("Window Resize");
    // })


})


// ************************************** Jquery Get Methods From Html Element ************************************** 


// (1) html
// (2) text
// (3) attr


$(document).ready(function () {


    // ******************* Get HTML Method *******************


    // let cardHtml = $(".card").html()
    // console.log(cardHtml);


    // ******************* Get Element Text Method *******************


    // let headingText = $("h1").text()
    // console.log(headingText);


    // ******************* Get Element Attribute (class, id) *******************


    // let cardClassNames = $(".card").attr("class")
    // console.log(cardClassNames);

    // let cardIdName = $(".card").attr("id")
    // console.log(cardIdName);

})