


let slideData=[
    Img1="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FInfosys.png&w=1920&q=75",

    Img2="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2Fmint_d_banner.png&w=1920&q=75",
    Img3="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2Fwinter_d_home.png&w=1920&q=75",

    Img4="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FShine_2nd_pos_Desktop.png&w=1920&q=75",

    Img5="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FReliance_Desktop.png&w=1920&q=75",

    Img6="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FDesktop_Banner_Shine.png&w=1920&q=75",

    Img7="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FInfosys.png&w=1920&q=75",
]

let i=0;
let Img=document.getElementById("slideshow")

let image=document.createElement("img");

setInterval(function(){

    if(i==7){
        i=0;
    }
    image.src=slideData[i];
    Img.append(image)
    i++
},2000);

 
var midSwiper = new midSwiper("#mid_wrap", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
