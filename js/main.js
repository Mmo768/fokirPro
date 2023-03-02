// ========== GLOBAL ==========
let nav = document.querySelector("nav");
const count1 = new CountUp('count1', 0, 200);
const count2 = new CountUp('count2', 0, 345);
const count3 = new CountUp('count3', 0, 1800);
const count4 = new CountUp('count4', 0, 1200);





// ========== start ==========

navbar();
images();
scrollnav();


$(document).scroll(function(){
    if($(document).scrollTop() > $(".count").offset().top-250){
        count1.start();
        count2.start();
        count3.start();
        count4.start();

    }
});




// ========== function ==========
function navbar(){
    $(document).scroll(function(){
        if($(document).scrollTop() > $(".about").offset().top - 80){
            $("nav").css({"background-color":"black"});
        }else{
            $("nav").css({"background-color":"transparent"});
        }
    });
};


function images(){
    $(".portfolio .tab-content .box").click(function(e){
        e.stopPropagation();
        $(".portfolio .modal img").attr("src",this.querySelector("img").getAttribute("src"));
        $(".portfolio .modal").addClass("d-block");
        
    });

    $(".portfolio .modal img").click(function(e){
        e.stopPropagation();
    });

    $(".portfolio .modal").click(function(e){
        e.stopPropagation();
        $(".portfolio .modal").removeClass("d-block");
    });
};



function scrollnav(){
    $("nav .nav-link").click(function(){

        $("html,body").animate({"scrollTop":$($(this).attr("my-href")).offset().top},200);
    });

};








// ========== validation ==========