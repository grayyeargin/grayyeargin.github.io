$(document).ready(function() {
    checkBrowserSupport();
    setIntroHeight();
    introFadeTitle();


  $('header a').on('click', function(){
    // switchSection($(this).attr('href'))
    throttleSwitch(this);
  })

  $('.work-example').on('click', function(){
    var $el = $(this)
    $el.children('span').addClass('hidden').css('opacity', '0');
    $el.children('img').removeClass('grayscale')
    $el.addClass('active');
    $('#mobile-work-wrapper').css('width', '100%');
    $el.siblings('.work-example').addClass('hidden').css('opacity', '0')
    $('#' + $el.data('target')).fadeIn();
    document.getElementById('portfolio-title').style.opacity = "0";
  })

  $('#portfolio .close').on('click', function(){
    deselectPortfolioItem();
  })



});

function deselectPortfolioItem(){
  var $el = $('#portfolio .active');
  $('#mobile-work-wrapper').css('width', '295px');
  $el.removeClass('active');
  $el.children('img').addClass('grayscale')
  $el.siblings('.work-example').css('opacity', '1').removeClass('hidden')
  $('#' + $el.data('target')).fadeOut();
  $el.children('span').css('opacity', '1').removeClass('.hidden')
  document.getElementById('portfolio-title').style.opacity = "1";
}

var throttleSwitch = (function(){
  var lastClick = 0;
  return function(arg){
    var current = new Date().getTime();
    if (current - lastClick > 700) {
      lastClick = current;
      switchSection($(arg).attr('href'));
    }
  }
})();


function checkBrowserSupport(){
  if (!Modernizr.cssreflections) {
    $('#intro #name-title').remove();
    $('#intro #name-title-img').attr('id', "name-title").addClass('intro-titles');
  }
}




function setIntroHeight(){
    var introSection = document.getElementById('intro');
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var content = $('#intro .content')
    if (windowHeight > 900) {
        introSection.style.height = "900px";
    } else if (windowHeight < 500) {
        introSection.style.height = "500px";
    } else {
        introSection.style.height = windowHeight + "px";
        content.css('top', (windowHeight/2) - (content.height()/2) - 50 + "px");
    }

}


function introFadeTitle(){
    setTimeout(function(){
        $('#intro #name-title').fadeIn('slow');
    }, 300);

    setTimeout(function(){
        $('#intro #location').fadeIn('slow');
    }, 600);

    setTimeout(function(){
        $('#intro #occupation').fadeIn('slow');
    }, 1000);
}


var switchSection = (function(){
  var section = "#intro"
  return function(selected){
    if (selected != section) {
      switch (section) {
        case "#intro":
          exitIntro();
          break;
        case "#portfolio":
          portfolioExit();
          break;
        case "#about":
          aboutExit();
          break
        case "#contact":
          contactExit();
      }
      section = selected;
      setTimeout(function(){
        switch (selected) {
          case "#intro":
            enterIntro();
            break;
          case "#portfolio":
            portfolioEnter();
            break;
          case "#about":
            aboutEnter();
            break;
          case "#contact":
            contactEnter();
        }
      }, 700) 
    }
  }
})()



function letterFade(el, speed){
  var thisEl = document.getElementById(el)
  var _original = thisEl.innerHTML;
  // var el = $('#location');
  var spanArray = [];
  _original.split('').forEach(function(l){
    spanArray.push('<span>'+l+'</span>');
  })
  thisEl.innerHTML = spanArray.join('');
  
  $('#' + el + ' span').each(function(i){
    var that = this
    setTimeout(function(){
      $(that).addClass('fade-out');
    }, i * speed);
  });
  setTimeout(function(){
    thisEl.innerHTML = _original;
    thisEl.style.display = "none";

  }, 2000)
}

function letterBounceEnter(el) {
  var _original = el.innerHTML;
  var spanArray = [];

  _original.split('').forEach(function(l){
    spanArray.push('<span>'+l+'</span>');
  })
  el.innerHTML = spanArray.join('');
  var spans = el.childNodes;
  $(spans).each(function(i){
    var that = this
    setTimeout(function(){
      $(that).addClass('zoom-enter');
    }, i * 20);
  })

  setTimeout(function(){
    el.innerHTML = _original;
  }, 1000);

}



// Route transitions
function enterIntro(){
  if (Modernizr.cssreflections) {
    document.getElementById('intro').style.display = "block";
    document.body.style.background = "#fff";
    document.getElementById('logo').style.color = "#2980b9";
    introFadeTitle();
  } else {
    $('#intro .intro-titles').hide();
    document.getElementById('intro').style.display = "block";
    introFadeTitle();
  }
}

function exitIntro(){
  if (Modernizr.cssreflections) {
    letterFade('location', 15);
    letterFade('occupation', 7);
    letterFade('name-title', 20);
    setTimeout(function(){
      $('#intro .content').children().css('display', 'none')
      document.getElementById('intro').style.display = "none";
    }, 700);
  } else {
    $('#intro').fadeOut('slow');
  }
}

function portfolioEnter(){
  document.getElementById('portfolio').style.display = "block";
  $('.work-example').addClass('zoom-enter');
  setTimeout(function(){
    $('.work-example').removeClass('zoom-enter');
  }, 400);
  document.getElementById('portfolio-title').style.opacity = "1";
}

function portfolioExit(){
  deselectPortfolioItem();
  document.getElementById('portfolio-title').style.opacity = "0";
  $('.work-example').addClass('zoom-exit')
  setTimeout(function(){
    document.getElementById('portfolio').style.display = "none";
    $('.work-example').removeClass('zoom-exit zoom-enter')
  }, 700);
}

// function fadeElement(el, c, o) {
//   var times= [75, 150, 225, 300, 150, 225, 300, 375];
//   setTimeout(function(){
//     el.style.opacity = o;
//   }, times[c]);
// }

function aboutEnter(){
  // document.getElementById('about').style.display = "block";
  $('#about').fadeIn(500);
}

function aboutExit(){
  // document.getElementById('about').style.display = "none";
  $('#about').fadeOut(500);
}

function contactEnter(){
  document.getElementById('contact').style.display = "block";
  document.getElementById('contact').style.opacity = "1";
  $('.social-text').each(function(i, el){
    letterBounceEnter(el);
  })
}

function contactExit(){
  document.getElementById('contact').style.opacity = "0";
  setTimeout(function(){
    document.getElementById('contact').style.display = "none";
  }, 500);
}




















