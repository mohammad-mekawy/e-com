  // onclick toggle class
  $('.btn-call-float').on('click', function(e) { $('.call-float-div').toggleClass('call-close'); });



  // Initialize library to lazy load images
  var observer = lozad('.lozad', {
      threshold: 0.1,
      load: function(el) {
          el.src = el.getAttribute("data-src");
          el.onload = function() {
              //toastr["success"](el.localName.toUpperCase() + " " + el.getAttribute("data-index") + " lazy loaded.")
          }
      }
  })

  // Picture observer
  // with default `load` method
  var pictureObserver = lozad('.lozad-picture', {
      threshold: 0.1
  })

  observer.observe()
  pictureObserver.observe()


  /*****************************/
  // jQuery Selections
  var $html = $('html'),
      $container = $('#container'),
      $prompt = $('#prompt'),
      $toggle = $('#toggle'),
      $about = $('#about'),
      $scene = $('#scene');


  // Setup FastClick.
  FastClick.attach(document.body);

  // Add touch functionality.
  if (Hammer.HAS_TOUCHEVENTS) {
      $container.hammer({ drag_lock_to_axis: true });
      _.tap($html, 'a,button,[data-tap]');
  }

  // Add touch or mouse class to html element.
  $html.addClass(Hammer.HAS_TOUCHEVENTS ? 'touch' : 'mouse');

  // Resize handler.
  (resize = function() {
      $scene[0].style.width = (window.innerWidth) + 'px';
      $scene[0].style.height = (window.innerHeight) + 'px';
      if (!$prompt.hasClass('hide')) {
          if (window.innerWidth < 600) {
              $toggle.addClass('hide');
          } else {
              $toggle.removeClass('hide');
          }
      }
  })();

  $(window).scroll(function() {
      if ($(window).scrollTop() >= 100) {
          $('#one-header').addClass('sticky-head');
      } else {
          $('#one-header').removeClass('sticky-head');
      }
  });

  // Attach window listeners.
  window.onresize = _.debounce(resize, 200);
  window.onscroll = _.debounce(resize, 200);

  function showDetails() {
      $about.removeClass('hide');
      $toggle.removeClass('i');
  }

  function hideDetails() {
      $about.addClass('hide');
      $toggle.addClass('i');
  }

  // Listen for toggle click event.
  $toggle.on('click', function(event) {
      $toggle.hasClass('i') ? showDetails() : hideDetails();
  });

  // Pretty simple huh?
  $scene.parallax();

  // Check for orientation support.
  setTimeout(function() {
      if ($scene.data('mode') === 'cursor') {
          $prompt.removeClass('hide');
          if (window.innerWidth < 600) $toggle.addClass('hide');
          $prompt.on('click', function(event) {
              $prompt.addClass('hide');
              if (window.innerWidth < 600) {
                  setTimeout(function() {
                      $toggle.removeClass('hide');
                  }, 1200);
              }
          });
      }
  }, 1000);

  $('.owl-carousel').owlCarousel({
      autoplay: true,
      center: true,
      loop: true,
      navigation: false,
      autoHeight: true,
      pagination: false,
      responsive: {
          1920: {
              items: 3,
              nav: true,
              margin: 350,
          },
          1400: {
              items: 3,
              nav: true,
              margin: 150,
          },
          1366: {
              items: 3,
              nav: true,
              margin: 150,
          },
          1024: {
              items: 3,
              nav: true
          },
          600: {
              items: 2,
              nav: false,
              margin: 50,
          },
          320: {
              items: 1,
              nav: true,
              margin: 100,
          },


      }
  });

  $('a[href*="#"]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top - 100
      }, 500, 'linear')
  });
  $('.navbar-nav li a').on('click', function(e) {
      e.preventDefault();
      $('.navbar-collapse').removeClass('in');
  });

  /***Fold 2**/
  $('.fold2-slides').slick({
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      autoplay: true,
      responsive: [{
              breakpoint: 1990,
              settings: "slick"
          },
          {
              breakpoint: 768,
              settings: "unslick"
          },
      ]
  });

  /***Fold 3**/
  $('.industry-wrap').slick({
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 5,
      autoplay: true,
      responsive: [{ breakpoint: 900, settings: "unslick" }]
          /*responsive: [
	  {
      breakpoint: 970,
      settings: {
        arrows: false,
        
        slidesToShow: 4
      }
    },
   {
      breakpoint: 768,
      settings: { 
        slidesToShow: 3
      }
    },
  
    {
      breakpoint: 480,
      settings: {
        arrows: false,
         
        slidesToShow: 2
      }
    }
  ]*/
  });


  /**Bubble Logo JS**/
  const SCROLL_SPEED = 3;
  const NOISE_SPEED = 0.004;
  const NOISE_AMOUNT = 5;
  const CANVAS_WIDTH = 2800;

  const bubblesEl = document.querySelector(".bubbles");
  const bubbleSpecs = [
      { s: 0.6, x: 1134, y: 45 },
      { s: 0.6, x: 1620, y: 271 },
      { s: 0.6, x: 1761, y: 372 },
      { s: 0.6, x: 2499, y: 79 },
      { s: 0.6, x: 2704, y: 334 },
      { s: 0.6, x: 2271, y: 356 },
      { s: 0.6, x: 795, y: 226 },
      { s: 0.6, x: 276, y: 256 },
      { s: 0.6, x: 1210, y: 365 },
      { s: 0.6, x: 444, y: 193 },
      { s: 0.6, x: 2545, y: 387 },
      { s: 0.8, x: 1303, y: 193 },
      { s: 0.8, x: 907, y: 88 },
      { s: 0.8, x: 633, y: 320 },
      { s: 0.8, x: 323, y: 60 },
      { s: 0.8, x: 129, y: 357 },
      { s: 0.8, x: 1440, y: 342 },
      { s: 0.8, x: 1929, y: 293 },
      { s: 0.8, x: 2135, y: 198 },
      { s: 0.8, x: 2276, y: 82 },
      { s: 0.8, x: 2654, y: 182 },
      { s: 0.8, x: 2783, y: 60 },
      { x: 1519, y: 118 },
      { x: 1071, y: 233 },
      { x: 1773, y: 148 },
      { x: 2098, y: 385 },
      { x: 2423, y: 244 },
      { x: 901, y: 385 },
      { x: 624, y: 111 },
      { x: 75, y: 103 },
      { x: 413, y: 367 },
      { x: 2895, y: 271 },
      //   { x: 1990, y: 75 }
  ];

  class Bubbles {
      constructor(specs) {
          this.bubbles = [];

          specs.forEach((spec, index) => {
              this.bubbles.push(new Bubble(index, spec));
          });

          requestAnimationFrame(this.update.bind(this));
      }

      update() {
          this.bubbles.forEach((bubble) => bubble.update());
          this.raf = requestAnimationFrame(this.update.bind(this));
      }
  }

  class Bubble {
      constructor(index, { x, y, s = 1 }) {
          this.index = index;
          this.x = x;
          this.y = y;
          this.scale = s;

          this.noiseSeedX = Math.floor(Math.random() * 64000);
          this.noiseSeedY = Math.floor(Math.random() * 64000);

          this.el = document.createElement("div");
          this.el.className = `bubble logo${this.index + 1}`;
          bubblesEl.appendChild(this.el);
      }

      update() {
          this.noiseSeedX += NOISE_SPEED;
          this.noiseSeedY += NOISE_SPEED;
          let randomX = noise.simplex2(this.noiseSeedX, 0);
          let randomY = noise.simplex2(this.noiseSeedY, 0);

          this.x -= SCROLL_SPEED;
          this.xWithNoise = this.x + randomX * NOISE_AMOUNT;
          this.yWithNoise = this.y + randomY * NOISE_AMOUNT;

          if (this.x < -200) {
              this.x = CANVAS_WIDTH;
          }

          this.el.style.transform = `translate(${this.xWithNoise}px, ${this.yWithNoise}px) scale(${this.scale})`;
      }
  }

  // For perlin noise
  noise.seed(Math.floor(Math.random() * 64000));

  const bubbles = new Bubbles(bubbleSpecs);


  /***commitment-loop**/
  $('.commitment-loop').slick({
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 5,
      autoplay: true,

      responsive: [{
              breakpoint: 970,
              settings: {
                  arrows: false,

                  slidesToShow: 4
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 3
              }
          },

          {
              breakpoint: 480,
              settings: {
                  arrows: false,

                  slidesToShow: 2
              }
          }
      ]
  });