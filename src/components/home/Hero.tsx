import { useState, useEffect } from 'react';
import heroSlide1 from '../../assets/images/hero-banner-test3.jpg';
import heroSlide2 from '../../assets/images/hero-banner-test2.jpg';
import styles from '../styles/hero.module.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: heroSlide1,
      title: 'Vive la experiencia más grande para planear tu boda o XV años.',
      subtitle: 'Encuentra los mejores expositores, descuentos exclusivos y ¡mucho más!',
      date: ' 4, 5 y 6 de Junio 2025'
    },
    {
      image: heroSlide2,
      title: '¡Gana una boda de ensueño o unos XV años inolvidables!',
      subtitle: 'Regístrate y participa en nuestra gran rifa. ',
      date: '¡Tu evento perfecto podría ser gratis!'

    }
  ];

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-[calc(100vh-3.5rem)] overflow-hidden">
      {/* Slides */}
      <div className="h-full relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
              <div className="max-w-4xl">
                <h2 className="text-2xl md:text-4xl font-cormorant mb-2 md:mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-2">{slide.subtitle}</p>
                <p className="text-md md:text-lg">{slide.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full ${styles.previousArrowSliderHome}`}
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full nextArrowSliderHome ${styles.nextArrowSliderHome}`}
        aria-label="Next slide"
      >
        &#10095;
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`mx-1 w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Ticket info box */}
      <div className="absolute bottom-12 left-4 md:left-10 z-20 bg-rust bg-opacity-90 text-white p-4 max-w-xs">
        <h3 className="text-sm md:text-base font-bold mb-2 text-center">Fecha: 4, 5 y 6 de Junio 2025</h3>
        <p className="text-xs md:text-sm mb-1 text-center">Lugar: Guanjuato - Irapuato. Inforum</p>
        <p className="text-xs md:text-sm font-bold text-center">¡Entrada Gratis!</p>

      </div>
    </div>
  );
};

export default Hero;
