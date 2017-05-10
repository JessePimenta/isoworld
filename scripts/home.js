$('.iconic-fork').hover(function(){
  $('.iconic-fork').animate({opacity: 0},300)
  $('.github').animate({opacity: 1},400)
})
// $('.iconic-fork').mouseleave(function(){
//   $('.iconic-fork').animate({opacity: 1},400)
//   $('.github').animate({opacity: 0},300)
// })

$('.iconic-beaker').hover(function(){
  $('.iconic-beaker').animate({opacity: 0},300)
  $('.experiments').animate({opacity: 1},400)
})
// $('.iconic-beaker').mouseleave(function(){
//   $('.iconic-beaker').animate({opacity: 1},400)
//   $('.experiments').animate({opacity: 0},300)
// })

$('.iconic-envelope-closed').hover(function(){
  $('.iconic-envelope-closed').animate({opacity: 0},300)
  $('.contact').animate({opacity: 1},400)
})

// $('.contact').mouseleave(function(){
//   $('.iconic-envelope-closed').animate({opacity: 1},400)
//   $('.contact').animate({opacity: 0},300)
// })

$('.iconic-brain').hover(function(){
  $('.iconic-brain').animate({opacity: 0},300)
  $('.about').animate({opacity: 1},400)
})

// $('.about').mouseleave(function(){
//   $('.iconic-brain').animate({opacity: 1},400)
//   $('.about').animate({opacity: 0},300)
// })

$('.iconic-keyboard').hover(function(){
  $('.iconic-keyboard').animate({opacity: 0},300)
  $('.web').animate({opacity: 1},400)
})
// $('.web').mouseleave(function(){
//   $('.iconic-keyboard').animate({opacity: 1},400)
//   $('.web').animate({opacity: 0},300)
// })

$('.iconic-eye-open').hover(function(){
  $('.iconic-eye-open').animate({opacity: 0},300)
  $('.design').animate({opacity: 1},400)
})
// $('.design').mouseleave(function(){
//   $('.iconic-eye-open').animate({opacity: 1},400)
//   $('.design').animate({opacity: 0},300)
// })

$('.iconic-script').hover(function(){
  $('.iconic-script').animate({opacity: 0},300)
  $('.resume').animate({opacity: 1},400)
})

// $('.resume').mouseleave(function(){
//   $('.iconic-script').animate({opacity: 1},400)
//   $('.resume').animate({opacity: 0},300)
// })

$('.iconic-file-gif').hover(function(){
  $('.iconic-file-gif').animate({opacity: 0},300)
  $('.gif').animate({opacity: 1},400)
})
// $('.gif').mouseleave(function(){
//   $('.iconic-file-gif').animate({opacity: 1},400)
//   $('.gif').animate({opacity: 0},300)
// })
$('.iconic-audio-spectrum').hover(function(){
  $('.iconic-audio-spectrum').animate({opacity: 0},300)
  $('.sound').animate({opacity: 1},400)
})
// $('.sound').mouseleave(function(){
//   $('.iconic-audio-spectrum').animate({opacity: 1},400)
//   $('.sound').animate({opacity: 0},300)
// })

// hide / show design content
$('#top1,.design').click(function(){
  $('.masonry').css('display','block')
  $('.design-image').css("display",'block')
  $('.design-image').animate({opacity:1},400)
  $('#graphic-tag').css('margin-top', '20px')
  $('a .iconic-x-thin').css("display","block")
  $('a .iconic-x-thin').animate({opacity:1},400)
  // $('.design-image').toggle()
})
// toggle web content
$('#left1,.web').click(function(){
  $('.masonry-web').css('display','block')
  $('.web-image').css("display",'block')
  $('.web-image').animate({opacity:1},400)
  $('a .iconic-x-thin').css("display","block")
  $('a .iconic-x-thin').animate({opacity:1},400)
  // $('.design-image').toggle()
})

function hideDesign() {
  $('.design-image').css("display",'none')
  $('#graphic-tag').show()
  $('.iconic-x-thin').animate({opacity:0},100)

}
function hideContent() {
  $('.design-image').css("display",'none')
  $('#graphic-tag').show()
  $('.iconic-x-thin').animate({opacity:0},100)
  $('.web-image').css("display",'none')
  $('#web-tag').show()
  $('.iconic-x-thin').animate({opacity:0},100)

}
