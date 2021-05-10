export const ACHIEVEMENT_IMAGES = [
    "images/taling.png",
    "images/dreamary.png",
    "images/chunmyung.png",
    "images/corona.png",
    "images/mask.png",
    "images/ailo.png",
    "images/edumanager.png",
    "images/gochin.png",
    "images/mamila.png",
]

export const SLIDER_SETTINGS = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };