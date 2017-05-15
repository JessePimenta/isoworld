if($(window).width() <= 470) {
window.location = "http://j-p.zone/mobile.html";
}


function id(v){return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlay"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0;
        tot = img.length -30 ;

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      prog.style.width = perc;
      stat.innerHTML = "Loading... "+ perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      ovrl.style.opacity = 0;
      setTimeout(function(){
        ovrl.style.display = "none";
      }, 1200);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);

var pageTitle = $("#title").text();

  // Change page title on blur
  $(window).blur(function() {
    $("#title").text("please look at me");
  });

  // Change page title back on focus
  $(window).focus(function() {
    $("title").text(pageTitle);
  });

// $('.toggle-box h1').animate({left: "-100px"},1000).animate({left:'20px'},1000)

$('#design,#contact,#web,#gif,#experiments,#about,#resume-pane,#sound,#ground, .svg-container,.design,.resume,.experiments,.web, .github').draggable()
// $('#design,#contact,#web,#gif,#experiments,#about,#resume-pane,#sound,#ground, .svg-container,.design,.resume,.experiments,.web, .github').click(function(){
//   $('#design,#contact,#web,#gif,#experiments,#about,#resume-pane,#sound,#ground').resizable({
//     aspectRatio: true,
//     animateEasing: "easeOutBounce",
//     animate: true,
//     ghost: true,
//     helper: "resizable-helper",
//     "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
//
//
//   });
// })
$('#design,#contact,#web,#gif,#experiments,#about,#resume-pane,#sound,#ground').animate({opacity: 1},1000)






var windowWidth = $(window).width();

if (navigator.userAgent.indexOf('Safari') && !navigator.userAgent.indexOf('Chrome')) {
  $('.nav').css("display","none");
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
      $('a .iconic-x-thin').css("margin-top","30px")
      $('a .iconic-x-thin').animate({opacity:1},400)

    }else if(clickCount == 1){
      $('.box-headline').animate({opacity: 1},400)
      $('#experiments-tag').css("opacity","0")
    }
    clickCount++;
});


$('#design,#web,#gif,#experiments,.design,.experiments,.web,#contact,#about,#sound').click(function(){

$('#design,#contact,#web,#gif,#experiments,#about,#resume-pane,#sound').css('background-color','rgba(0, 0, 0, .99')
$('#design,#contact,#web,#gif,#experiments,#about,#resume-pane,#sound').css('border','1px dotted')
$('#design,#contact,#web,#gif,#experiments,#about,#resume-pane,#sound').css('cursor','grabbing !important')

  $('.box-headline').css("display","none")
  // $('.box-headline').css("margin-top","20px")
  $('a .iconic-x-thin').css("display","block")
  $('a .iconic-x-thin').css("margin-top","20px")
  $('a .iconic-x-thin').animate({opacity:1},400)

})
$('#about,#contact,#resume-pane,.resume,#sound,.sound').click(function(){
  $('.box-headline').css("display","none")
  // $('.box-headline').css("margin-top","20px")
  $('a .iconic-x-thin').css("display","block")
  $('a .iconic-x-thin').css("margin-top","30px")
  $('a .iconic-x-thin').animate({opacity:1},400)

})


// toggle design
$('#design,.design').click(function(){
  $('#graphic-tag').css("opacity","0")
  $('.masonry').css('display','block')
  $('.design-image').css("display",'block')
  $('.design-image').animate({opacity:1},400)

})
// toggle web
$('#web,.web').click(function(){
  $('#web-tag').css("opacity","0")
  $('.masonry-web').css('display','block')
  $('.masonry-web').css('pointer-events','auto')
  $('.web-image').css("display",'block')
  $('.web-image').animate({opacity:1},400)
})
$('#experiments,.experiments').click(function(){
  $('#experiments-tag').css("opacity","0")
  $('.masonry-gif').css('display','block')
  $('.experiment-image').css("display",'block')
  $('.experiment-image').animate({opacity:1},400)

})
$('#gif,.gif').click(function(){
  $('#gif-tag').css("opacity","0")
  $('.masonry-gif-image').css('display','block')
  $('.gif-image').css("display",'block')
  $('.gif-image').animate({opacity:1},400)
})

$('#resume-pane,.resume').click(function(){
  $('#resume-tag').css("opacity","0")
  $('.iconic-file-pdf').css('visibility','visible')
})
$('#about').click(function(){
  $('#about-tag').css("opacity","0")
})
$('#sound').click(function(){
  $('#sound-tag').css("opacity","0")
})
// $('#contact').click(function(){
//   $('#sound-tag').css("opacity","0")
// })




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
              $('#design-suite').addClass("cursor").text($design.substring(0, i));
                 if(i < $design.length){
                    setTimeout(function(){
                        initDesign(i + 1);
                    }, 35);
                 }else{
                    $('#design-suite').removeClass("cursor");
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


// zIndex switching


var clicks = 0;
$('#web, #design,#experiments,#contact,#about,#resume-pane,#gif,#sound,.design,.web,.experiments,.resume,.contact,.about,.gif,.sound').click(function(){
  $('.toggle-box').css('display','block')
    clicks = (clicks == 2) ? 0: clicks;
    if(clicks == 0){
      $('.design,.web,.experiments,.resume,.contact,.about,.gif,.sound').click(function(){
        $('.web-pane,#experiments,#contact,#about,#resume-pane,#gif,#sound').css('z-index','9')
      })

    }else if(clicks == 1){
      // $('.design').click(function(){
        // $('#web,#experiments,#contact,#about,#resume-pane').css('z-index','10')
      // })
    }
    clicks++;
});
// $('.design').click(function(){
//   $('#web,#experiments,#contact,#about,#resume-pane').css('z-index','9')
// })

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

function curvedText(time) {
  var tl   = new TimelineMax({ repeat: -1 });
  var text = document.querySelector('svg textpath'),
      path = document.querySelector('svg defs path');

  var from = {
    transformOrigin: 'center center',
    rotation: 0
  };

  var to = {
    rotation: 360,
    ease: Linear.easeInOut
  };

  tl.fromTo([text, path], time, from, to);

  return tl;
}

curvedText(10);


function ShowHamburgerNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
