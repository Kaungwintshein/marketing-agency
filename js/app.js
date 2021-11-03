new WOW().init();
$(".pricing-slides").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(document).ready(function () {
  let screenHeight = $(window).height();
  $(window).scroll(function () {
    let currentPosition = $(this).scrollTop();
    if (currentPosition >= screenHeight - 100) {
      $(".site-nav").addClass("site-nav-scroll");
    } else {
      $(".site-nav").removeClass("site-nav-scroll");
      setActive("home");
    }
  });
});

$(".navbar-toggler").click(function () {
  let result = $(".navbar-collapse").hasClass("show");
  if (result) {
    $(".menu-icon").removeClass("fa-close").addClass("fa-bars");
  } else {
    $(".menu-icon").removeClass("fa-bars").addClass("fa-close");
  }
});

function setActive(current) {
  $(".nav-link").removeClass("current-section");
  $(`.nav-link[href='#${current}']`).addClass("current-section");
}

function navScroll() {
  let currentSection = $("section[id]");
  currentSection.waypoint(
    function (direction) {
      if (direction == "down") {
        let currentSectionId = $(this.element).attr("id");
        console.log(currentSectionId);
        setActive(currentSectionId);
      }
    },
    {
      offset: "150px",
    }
  );

  currentSection.waypoint(
    function (direction) {
      if (direction == "up") {
        let currentSectionId = $(this.element).attr("id");
        console.log(currentSectionId);
        setActive(currentSectionId);
      }
    },
    {
      offset: "150px",
    }
  );
}
navScroll();

$(window).on("load", function () {
  $(".loader-container").fadeOut(500, function () {
    $(this).remove();
  });
});
