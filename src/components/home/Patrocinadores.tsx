import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import patrocinador1 from '../../assets/images/patrocinadores/asiOmasrico.jpg';
import patrocinador2 from '../../assets/images/patrocinadores/alejandroLopez.jpg';
import patrocinador3 from '../../assets/images/patrocinadores/fanatics.jpg';

const Patrocinadores = () => {
  const patrocinadores = [
    patrocinador1,
    patrocinador2,
    patrocinador3,
    patrocinador1,
    patrocinador2,
    patrocinador3,
    patrocinador1,
    patrocinador2,
    patrocinador3,
  ];

  return (
    <section className="py-12 px-4 bg-beige bg-opacity-30" id="patrocinadores">
      <div className="container mx-auto">
        <h2 className="text-3xl font-cormorant text-center mb-8">Nuestros Patrocinadores</h2>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={2} // Mobile (2 imágenes)
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            640: {
              slidesPerView: 3, // Tablet (3 imágenes)
            },
            1024: {
              slidesPerView: 4, // Desktop (4 imágenes)
            },
          }}
        >
          {patrocinadores.map((patrocinador, index) => (
            <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-4 rounded-lg w-48 h-36 bg-gray-100"> {/* Fondo gris claro */}
                    <img
                    src={patrocinador}
                    alt={`Patrocinador ${index + 1}`}
                    className="w-full h-full object-contain"
                    />
                </div>
                </SwiperSlide>
          ))}

          {/* Flechas de navegación personalizadas */}
          <div className="swiper-button-next !text-black !w-8 !h-8"></div>
          <div className="swiper-button-prev !text-black !w-8 !h-8"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Patrocinadores;