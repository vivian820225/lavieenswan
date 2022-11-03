AOS.init();

const swiperS2 = new Swiper("#swiper-s2", {
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: "#swiper-s2 .swiper-button-next",
    prevEl: "#swiper-s2 .swiper-button-prev",
  },
});
const swiperS3 = new Swiper("#swiper-s3", {
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: "#swiper-s3 .swiper-button-next",
    prevEl: "#swiper-s3 .swiper-button-prev",
  },
});

const swiperS4 = new Swiper("#swiper-s4", {
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: "#swiper-s4 .swiper-button-next",
    prevEl: "#swiper-s4 .swiper-button-prev",
  },
});

const swiperS5 = new Swiper("#swiper-s5", {
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: "#swiper-s5 .swiper-button-next",
    prevEl: "#swiper-s5 .swiper-button-prev",
  },
});

const swiperS6 = new Swiper("#swiper-s6", {
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: "#swiper-s6 .swiper-button-next",
    prevEl: "#swiper-s6 .swiper-button-prev",
  },
});

const swiperS7 = new Swiper("#swiper-s7", {
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: "#swiper-s7 .swiper-button-next",
    prevEl: "#swiper-s7 .swiper-button-prev",
  },
});

const swiperS8 = new Swiper("#swiper-s8", {
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: "#swiper-s8 .swiper-button-next",
    prevEl: "#swiper-s8 .swiper-button-prev",
  },
});

let timer = null;
let callback = ([entry]) => {
  const toast = document.querySelector(".toast");
  if (entry.isIntersecting) {
    toast.classList.add("active");
    timer = setTimeout(() => {
      toast.classList.remove("active");
    }, 5 * 1000);
    return;
  }
  clearTimeout(timer);
  toast.classList.remove("active");
};

const options = { threshold: 0 };

const observer = new IntersectionObserver(callback, options);

const section = document.querySelector(".s1");
const dragContainer = document.querySelector(".horizontal-scroll-container");

function initPositionImg() {
  const dragImg = document.querySelector(".scroll-img");
  const positionLeft = dragImg.clientWidth / 2 - dragContainer.clientWidth;
  dragContainer.scrollLeft = positionLeft;
}

const ImgObserver = new ResizeObserver(([entry]) => {
  if (entry && entry.target) {
    initPositionImg();
  }
});

window.addEventListener("load", function () {
  const width = window.innerWidth;
  if (width < 1024) {
    observer.observe(section);
    ImgObserver.observe(dragContainer, { box: "border-box" });
  }
});
