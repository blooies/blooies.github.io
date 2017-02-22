$(document).ready(function() {
    $('.slide:first-child').addClass('showing')
    $('#nav .boxy:first-child').addClass('hover')

    $('#nav .boxy').on('mouseover', function() {
        ////remove the previous expanded
        $('#nav .boxy').removeClass('hover')
        $('#page div.showing').removeClass('showing').addClass('hidden')

        /// add the expand to current tab & page
        $(this).addClass('hover')
        var whichTab = this.id
        $('#page .slide:nth-child('+whichTab+')').addClass('showing animated bounceTop')
    });


    $("a").mouseenter(function(){
        $(this).animate({ "top" : "-4px" }, 80);
    })
    .mouseleave(function(){
        $(this).animate({ "top": "0px"}, 80)
    });

    


});
    
