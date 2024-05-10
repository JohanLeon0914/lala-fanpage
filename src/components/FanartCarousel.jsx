import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

export function FantartCarousel() {
  const images = [
    {
      id: 1,
      url: "/assets/fanarts/1.jpg",
      link: "https://twitter.com/GumaeArt/status/1786572939833348323",
    },
    {
      id: 2,
      url: "/assets/fanarts/2.jpg",
      link: "https://twitter.com/_Mewth/status/1786572804571209795",
    },
    {
      id: 3,
      url: "/assets/fanarts/3.jpg",
      link: "https://twitter.com/AldenEmroch/status/1787585888869810443",
    },
    {
      id: 4,
      url: "/assets/fanarts/4.jpg",
      link: "https://twitter.com/itznikki_/status/1786613336718614829",
    },
    {
      id: 5,
      url: "/assets/fanarts/5.jpg",
      link: "https://twitter.com/Orenji_Gallery/status/1786591268643983711",
    },
    {
      id: 6,
      url: "/assets/fanarts/6.jpg",
      link: "https://twitter.com/OkaeriVT/status/1786629378585084047/photo/1",
    },
    {
      id: 7,
      url: "/assets/fanarts/7.jpg",
      link: "https://twitter.com/pinku_rimu/status/1786633290956349748",
    },
    {
      id: 8,
      url: "/assets/fanarts/8.jpg",
      link: "https://twitter.com/harukissed/status/1786655769007403409",
    },
    {
      id: 9,
      url: "/assets/fanarts/9.jpg",
      link: "https://twitter.com/GusiGaki/status/1786694839976829150",
    },
    {
      id: 10,
      url: "/assets/fanarts/10.jpg",
      link: "https://twitter.com/LalabellLullaby/status/1786910364854337912",
    },
    {
      id: 11,
      url: "/assets/fanarts/11.jpg",
      link: "https://twitter.com/YokoYume5/status/1786889628781256911",
    },
  ];
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            <img src={image.url} alt={`Fanart ${image.id}`} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
