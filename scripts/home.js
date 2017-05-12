if($(window).width() <= 470) {
window.location = "http://j-p.zone/mobile";
}

// $('.toggle-box h1').animate({left: "-100px"},1000).animate({left:'20px'},1000)

var windowWidth = $(window).width();
console.log(windowWidth)

if (navigator.userAgent.indexOf('Safari') && !navigator.userAgent.indexOf('Chrome')) {
  $('.nav').css("display","none");
  console.log('its safari')
}
else {
}

var clickCount = 0;
$('.design,.resume,.experiments,.web').click(function(){
    clickCount = (clickCount == 2) ? 0: clickCount;
    if(clickCount == 0){
      $('.box-headline').css("opacity","0")
      // $('.box-headline').css("margin-top","20px")
      $('a .iconic-x-thin').css("display","block")
      $('a .iconic-x-thin').css("margin-top","0px")
      $('a .iconic-x-thin').animate({opacity:1},400)

    }else if(clickCount == 1){
      $('.box-headline').animate({opacity: 1},400)
      $('#experiments-tag').css("opacity","0")
    }
    clickCount++;
});


$('#design,#contact,#web,#gif,#experiments,#about,#resume-pane,#sound').click(function(){
  $('.box-headline').css("opacity","0")
  // $('.box-headline').css("margin-top","20px")
  $('a .iconic-x-thin').css("display","block")
  $('a .iconic-x-thin').css("margin-top","0px")
  $('a .iconic-x-thin').animate({opacity:1},400)

})


// toggle design
$('#design,.design').click(function(){
  $('.masonry').css('display','block')
  $('.design-image').css("display",'block')
  $('.design-image').animate({opacity:1},400)

})
// toggle web
$('#web,.web').click(function(){
  $('.masonry-web').css('display','block')
  $('.web-image').css("display",'block')
  $('.web-image').animate({opacity:1},400)
})
$('#experiments,.experiments').click(function(){
  $('.masonry-gif').css('display','block')
  $('.experiment-image').css("display",'block')
  $('.experiment-image').animate({opacity:1},400)

})
$('#gif,.gif').click(function(){
  $('.masonry-gif-image').css('display','block')
  $('.gif-image').css("display",'block')
  $('.gif-image').animate({opacity:1},400)
})

$('#resume-pane,.resume').click(function(){
  $('.iconic-file-pdf').css('visibility','visible')
})



//toggle experiments


// toggle resume
$('#about').click(function(){
  $('.container').css("display", "block")
  var initDot = document.getElementById("loading");
  var loading = setInterval(function() {
      if(initDot.innerHTML.length == 5) {
          initDot.innerHTML = "";
      } else {
          initDot.innerHTML += ".";
      }
  }, 350); // Dot Speed

  var $loadingMessage = $('#loadingH1');

  setTimeout(function() {
        clearInterval(loading);
        $loadingMessage.hide();
     }, 1500);

  var initProgram = setTimeout(function(){
      var greeting = "UNIDENTIFIED ORGANIC LIFEFORM DETECTED";
      var message = "RUNNING RESUME PROTOCOL [RP] FOR USER: JESSE_PIMENTA";
      var $identityDiv = $("#identity-results");
      var $name = "NAME: JESSE PIMENTA";
      var $alias = "KNOWN ALIAS: J.P."
      var $occupation  = "OCCUPATION: FRONT END DEVELOPER | UX DEVLOPER | GRAPHIC DESIGNER";
      var $frontEnd  = "FRONT END DEVELOPMENT CORE: HTML5 | CSS3 | JAVASCRIPT";
        var $JSFrameworks = "JAVASCRIPT FRAMEWORKS: ANGULARJS";
        var $JSLibs = "JAVASCRIPT LIBRARIES: JQUERY | P5.JS | CENTI.JS ";
        var $CSSFrameworks = "CSS FRAMEWORKS: BOOTSTRAP | SEMANTIC UI";
        var $CSSPre = "CSS PREPROCESSORS: SASS | LESS";
        var $frontEndAnimation = "FRONT END ANIMATION: CANVAS | HTML5 | SVG";
      var $cmsDevelopment = "WORDPRESS: CUSTOM THEMING";
        var $wordpress = "WORDPRESS: CUSTOM THEMING | PLUGINS";
      var $design = "DESIGN CORE: ADOBE SUITE";
        var $webDesign = "WEB DESIGN: PHOTOSHOP CC | SKETCH ";
        var $branding = "ILLUSTRATIONS & BRANDING: ILLUSTRATOR CC | PHOTOSHOP CC";
        var $designAnimation = "ANIMATION DESIGN: AFTER EFFECTS CC";

     function initIdentityResults(i){
         $("#message").addClass("sign cursor").text(message.substring(0, i));
           if(i < message.length){
               setTimeout(function(){
                   initIdentityResults(i + 1);
               }, 35);
           }else{
              $('#message').removeClass("cursor");
              var loadingResume = function(){
                    $("#loadingMessage2").show()
                    var dotAlpha = document.getElementById("alpha-loading");
                    var loadingAlpha = setInterval(function() {
                     if(dotAlpha.innerHTML.length == 6) {
                         dotAlpha.innerHTML = "";
                     } else {
                         dotAlpha.innerHTML += ".";
                         setTimeout(function() {
                             clearInterval(loadingAlpha);
                             $("#loadingMessage2").hide();
                          }, 2000);
                     }
                 }, 350);  // Dot Speed
              }
              loadingResume();
              function initName(i){
                 $("#name").addClass("sign cursor").text($name.substring(0, i));
                    if(i < $name.length){
                       setTimeout(function(){
                          initName(i + 1);
                       }, 35);
                    }else{
                       $("#name").removeClass("cursor");
                       setTimeout(function() {
                          initAlias(0);
                       }, 1500);
                    }
              }
              setTimeout(function() {
                 initName(0);
              }, 2500);
           }
           function initAlias(i){
                 $("#alias").addClass("sign cursor").text($alias.substring(0, i));
                    if(i < $alias.length){
                       setTimeout(function(){
                          initAlias(i + 1);
                       }, 35);
                    }else{
                       $("#alias").removeClass("cursor");
                       setTimeout(function() {
                          initOccupation(0);
                       }, 1500);
                    }
           }
           function initOccupation(i){
              $("#occupation").addClass("sign cursor").text($occupation.substring(0, i));
                    if(i < $occupation.length){
                       setTimeout(function(){
                          initOccupation(i + 1);
                       }, 35);
                    }else{
                       $("#occupation").removeClass("cursor");
                       setTimeout(function() {
                          initFrontEnd(0);
                       }, 1500);
                    }
           }
           function initFrontEnd(i){
              $('#front-end-span').addClass('fa fa-wrench');
              $('#front-end').addClass("cursor").text($frontEnd.substring(0, i));
                 if(i < $frontEnd.length){
                    setTimeout(function(){
                       initFrontEnd(i + 1);
                    }, 35);
                 }else{
                    $('#front-end').removeClass("cursor");
                       setTimeout(function() {
                          initJSFrameworks(0);
                       }, 1500);
                 }
           }
           function initJSFrameworks(i){
              $('#js-frameworks').addClass("sign cursor").text($JSFrameworks.substring(0, i));
                 if(i < $JSFrameworks.length){
                    setTimeout(function(){
                        initJSFrameworks(i + 1);
                    }, 35);
                 }else{
                    $('#js-frameworks').removeClass("cursor");
                       setTimeout(function() {
                          initJSLibs(0);
                       }, 1500);
                 }
           }
           function initJSLibs(i){
              $('#js-libs').addClass("sign cursor").text($JSLibs.substring(0, i));
                 if(i < $JSLibs.length){
                    setTimeout(function(){
                        initJSLibs(i + 1);
                    }, 35);
                 }else{
                    $('#js-libs').removeClass("cursor");
                       setTimeout(function() {
                          initCSSFrameworks(0);
                       }, 1500);
                 }
           }
           function initCSSFrameworks(i){
              $('#css-frameworks').addClass("sign cursor").text($CSSFrameworks.substring(0, i));
                 if(i < $CSSFrameworks.length){
                    setTimeout(function(){
                        initCSSFrameworks(i + 1);
                    }, 35);
                 }else{
                    $('#css-frameworks').removeClass("cursor");
                    setTimeout(function() {
                          initCSSPre(0);
                       }, 1500);
                 }
           }
            function initCSSPre(i){
              $('#css-pre').addClass("sign cursor").text($CSSPre.substring(0, i));
                 if(i < $CSSPre.length){
                    setTimeout(function(){
                        initCSSPre(i + 1);
                    }, 35);
                 }else{
                    $('#css-pre').removeClass("cursor");
                    setTimeout(function() {
                          initFrontEndAnimation(0);
                       }, 1500);
                 }
           }
           function initFrontEndAnimation(i){
              $('#front-end-animation').addClass("sign cursor").text($frontEndAnimation.substring(0, i));
                 if(i < $frontEndAnimation.length){
                    setTimeout(function(){
                        initFrontEndAnimation(i + 1);
                    }, 35);
                 }else{
                    $('#front-end-animation').removeClass("cursor");
                    setTimeout(function() {
                          initCMSDevelopment(0);
                       }, 1500);
                 }
           }
           function initCMSDevelopment(i){
              $('#cms-span').addClass("fa fa-wordpress")
              $('#CMS-development').addClass("cursor").text($cmsDevelopment.substring(0, i));
                 if(i < $cmsDevelopment.length){
                    setTimeout(function(){
                        initCMSDevelopment(i + 1);
                    }, 35);
                 }else{
                    $('#CMS-development').removeClass("cursor");
                    setTimeout(function() {
                          initDesign(0);
                       }, 1500);
                 }
           }
          //  function initWordpress(i){
          //     $('#wordpress').addClass("sign cursor").text($wordpress.substring(0, i));
          //        if(i < $wordpress.length){
          //           setTimeout(function(){
          //               initWordpress(i + 1);
          //           }, 35);
          //        }else{
          //           $('#wordpress').removeClass("cursor");
          //           setTimeout(function() {
          //                 initDesign(0);
          //              }, 1500);
          //        }
          //  }
            function initDesign(i){
              $('#design-span').addClass('fa fa-paint-brush');
              $('#design').addClass("cursor").text($design.substring(0, i));
                 if(i < $design.length){
                    setTimeout(function(){
                        initDesign(i + 1);
                    }, 35);
                 }else{
                    $('#design').removeClass("cursor");
                    setTimeout(function() {
                          initWebDesign(0);
                       }, 1500);
                 }
           }
           function initWebDesign(i){
              $('#web-design').addClass("sign cursor").text($webDesign.substring(0, i));
                 if(i < $webDesign.length){
                    setTimeout(function(){
                        initWebDesign(i + 1);
                    }, 35);
                 }else{
                    $('#web-design').removeClass("cursor");
                    setTimeout(function() {
                          initBranding(0);
                       }, 1500);
                 }
           }
           function initBranding(i){
              $('#branding').addClass("sign cursor").text($branding.substring(0, i));
                 if(i < $branding.length){
                    setTimeout(function(){
                        initBranding(i + 1);
                    }, 35);
                 }else{
                    $('#branding').removeClass("cursor");
                    setTimeout(function() {
                          initDesignAnimation(0);
                       }, 1500);
                 }
           }
           function initDesignAnimation(i){
              $('#design-animation').addClass("sign cursor").text($designAnimation.substring(0, i));
                 if(i < $designAnimation.length){
                    setTimeout(function(){
                        initDesignAnimation(i + 1);
                    }, 35);
                 }else{
                    //$('#design-animation').removeClass("cursor");
                 }
           }
        }

     function initProgramAlpha(i){
         $("#greeting").addClass("cursor").text(greeting.substring(0, i));
           if(i < greeting.length){
               setTimeout(function(){
                   initProgramAlpha(i + 1);
               }, 35);
           }else{
              $("#greeting").removeClass("cursor");
              initIdentityResults(0);
           }
        }
        initProgramAlpha(0)

  }, 1500);

  initProgram()

})

// toggle about


// toggle contact
$('#contact').click(function(){
$('.contact-container').css("display", 'block')
})

// toggle sound

$('#sound').click(function(){
  $('iframe').css('display', 'block')
})




function hideContent() {
  $('.masonry').css("display",'none')
  // $('.box-headline').css("margin-top","0px")
  $('.web-image').css("display",'none')
  $('.gif-image').css("display",'none')
  $('.experiment-image').css("display",'none')
  // $('#cv').css("display",'none')
  // $('#graphic-tag').show()
  // $('#web-tag').show()
  $('.iconic-x-thin').animate({opacity:0},100)
  $('a .iconic-x-thin').css("display","none")
  $('.box-headline').animate({opacity:1},400)



}

function hideNav() {
  $('#primary_nav_wrap').hide(400)
  $('.toggle-box').hide(400)
}
function showNav() {
  $('#primary_nav_wrap').show(400)
  $('.toggle-box').show(400)

}
