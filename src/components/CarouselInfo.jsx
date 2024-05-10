import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export function Carrousel() {
  const images = [
    {
      id: 1,
      url: "/assets/merch.jpg",
      link: "https://shop.idol-company.com/products/lalabell-lullaby-regular-collection",
      description: "Merch Oficial",
    },
    {
      id: 2,
      url: "/assets/horario.jpg",
      link: "https://twitter.com/LalabellLullaby/status/1787243621323788633",
      description: "Horario Semanal",
    },
    {
      id: 3,
      url: "/assets/lala1.jpg",
      link: "https://www.youtube.com/live/ithmL8qCoec?si=KGAgtUEI2UUQ8CMq",
      description: "Stream Debut",
    },
  ];
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <div>
            <img
              src={image.url}
              alt={`${image.id}`}
              className="max-h-[900px] w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-main bg-opacity-80 rounded-md p-4">
                <a href={image.link} target="_BLANK">
                  <p className="text-xl text-color_text_secund">
                    {image.description}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
