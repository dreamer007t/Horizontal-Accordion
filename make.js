<script>

jQuery(document).ready(function($){

    var rowWidth = $(".vertical-accordion-row").outerWidth();
    var columnCount = ($(".closed .background-closed").length);
    var columnWidth = $(".closed .background-closed").outerWidth();

    rowWidth = rowWidth - (columnCount*columnWidth);
    //
    // $(".open .background-closed").css({
    //     "width":rowWidth
    // });

    $(window).on("resize load",function(){
//         console.log($(window).width());
        if($(window).width() < 400){
            $(".accordion-wrapper").removeClass("desktop");
            $(".accordion-wrapper").addClass("mobile");

            $(".accordion-item").css("width","100%");
            $(".accordion-item .accordion-item-container").css({
                "height":"120px",
                "transition":"height 0.4s ease-in-out"
            });

            $(".accordion-item.open").find(".accordion-item-container").css({
                "height":"670px",
                "transition":"height 0.4s ease-in-out"

            });


        }
        else if($(window).width() < 900){
            $(".accordion-wrapper").removeClass("desktop");
            $(".accordion-wrapper").addClass("mobile");

            $(".accordion-item").css("width","100%");
            $(".accordion-item .accordion-item-container").css({
                "height":"120px",
                "transition":"height 0.4s ease-in-out"
            });

            $(".accordion-item.open").find(".accordion-item-container").css({
                "height":"570px",
                "transition":"height 0.4s ease-in-out"

            });
        }
        else{
            $(".accordion-wrapper").addClass("desktop");
            $(".accordion-wrapper").removeClass("mobile");
            $(".accordion-item").find(".accordion-item-container").css({
                "height":"700px",
                "transition":"height 0.4s ease-in-out"
            });
            $(".accordion-item.closed").css("width","8%");
            $(".accordion-item.open").css("width","60%");

        }
    });

    // $(".accordion-item").first().addClass("open");

    $(".accordion-item").on("click",function(){

//         console.log("clicked");
        if($(window).width() > 900){
            $(".accordion-wrapper").addClass("desktop");
            $(".accordion-wrapper").removeClass("mobile");
            $(".accordion-item.open").css({
                "width":"8%",
                "transition":"width 0.4s ease-in-out"
            });

            $(".accordion-item.open").addClass("closed").removeClass("open");


            $(this).css({
                "width":"60%",
                "transition":"width 0.4s ease-in-out"

            });
            $(this).addClass("open").removeClass("closed");
        }
        else{
            $(".accordion-wrapper").addClass("mobile");
            $(".accordion-wrapper").removeClass("desktop");
            $(".accordion-item .accordion-item-container").css({
                "height":"120px",
                "transition":"height 0.4s ease-in-out"
            });

            $(".accordion-item").addClass("closed").removeClass("open");


            $(this).find(".accordion-item-container").css({
                "height":"570px",
                "transition":"height 0.4s ease-in-out"

            });
            $(this).addClass("open").removeClass("closed");






        }



    });

});
</script>
<script>

jQuery(document).ready(function($){

    var rowWidth = $(".vertical-accordion-row").outerWidth();
    var columnCount = ($(".closed .background-closed").length);
    var columnWidth = $(".closed .background-closed").outerWidth();

    rowWidth = rowWidth - (columnCount*columnWidth);
    //
    // $(".open .background-closed").css({
    //     "width":rowWidth
    // });

    $(window).on("resize load",function(){
//         console.log($(window).width());
        if($(window).width() < 400){
            $(".c-accordion-wrapper").removeClass("desktop");
            $(".c-accordion-wrapper").addClass("mobile");

            $(".c-accordion-item").css("width","100%");
            $(".c-accordion-item .c-accordion-item-container").css({
                "height":"120px",
                "transition":"height 0.4s ease-in-out"
            });

            $(".c-accordion-item.open").find(".c-accordion-item-container").css({
                "height":"670px",
                "transition":"height 0.4s ease-in-out"

            });


        }
        else if($(window).width() < 900){
            $(".c-accordion-wrapper").removeClass("desktop");
            $(".c-accordion-wrapper").addClass("mobile");

            $(".c-accordion-item").css("width","100%");
            $(".c-accordion-item .c-accordion-item-container").css({
                "height":"120px",
                "transition":"height 0.4s ease-in-out"
            });

            $(".c-accordion-item.open").find(".c-accordion-item-container").css({
                "height":"570px",
                "transition":"height 0.4s ease-in-out"

            });
        }
        else{
            $(".c-accordion-wrapper").addClass("desktop");
            $(".c-accordion-wrapper").removeClass("mobile");
            $(".c-accordion-item").find(".c-accordion-item-container").css({
                "height":"700px",
                "transition":"height 0.4s ease-in-out"
            });
            $(".c-accordion-item.closed").css("width","10%");
            $(".c-accordion-item.open").css("width","60%");

        }
    });

    // $(".c-accordion-item").first().addClass("open");

    $(".c-accordion-item").on("click",function(){

//         console.log("clicked");
        if($(window).width() > 900){
            $(".c-accordion-wrapper").addClass("desktop");
            $(".c-accordion-wrapper").removeClass("mobile");
            $(".c-accordion-item.open").css({
                "width":"10%",
                "transition":"width 0.4s ease-in-out"
            });

            $(".c-accordion-item.open").addClass("closed").removeClass("open");


            $(this).css({
                "width":"60%",
                "transition":"width 0.4s ease-in-out"

            });
            $(this).addClass("open").removeClass("closed");
        }
        else{
            $(".c-accordion-wrapper").addClass("mobile");
            $(".c-accordion-wrapper").removeClass("desktop");
            $(".c-accordion-item .c-accordion-item-container").css({
                "height":"120px",
                "transition":"height 0.4s ease-in-out"
            });

            $(".c-accordion-item").addClass("closed").removeClass("open");


            $(this).find(".c-accordion-item-container").css({
                "height":"570px",
                "transition":"height 0.4s ease-in-out"

            });
            $(this).addClass("open").removeClass("closed");






        }



    });

});
</script>
