import { useState, useEffect } from 'react';
import heroSlide1 from '../../assets/images/hero-slide-1.jpeg';
import heroSlide2 from '../../assets/images/hero-slide-2.jpeg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: heroSlide1,
      title: 'Los mejores expositores con descuentos especiales este fin de semana.',
      subtitle: 'Irapuato Guanajuato',
      date: ' 1,2,3 y 4 de Junio 2025'
    },
    {
      image: heroSlide2,
      title: 'Mensaje bla bla bla para segundo Slider.',
      subtitle: 'Otro mensaeje de prueba. Carlos Deseda',
      date: ' Otra posible fecha o mensaje. Carlos Deseda'

    }
  ];

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
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
                <a
                  href="www.gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block bg-rust hover:bg-gold text-white py-3 px-6 rounded-md transition-colors"
                >
                  BOLETOS EN LÍNEA (DA CLIC AQUÍ)
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full"
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
        <h3 className="text-sm md:text-base font-bold mb-2">Fecha: Mayo 31 y Junio 1, 2025</h3>
        <p className="text-xs md:text-sm mb-1">Lugar: WTC de la Ciudad de México</p>
        <p className="text-xs md:text-sm font-bold">BOLETOS DISPONIBLES</p>
        <p className="text-xs md:text-sm mb-1">EN LÍNEA (Antes de la expo): $150</p>
        <p className="text-xs md:text-sm">EN TAQUILLA (Los días de la expo): $160</p>
      </div>
    </div>
  );
};

export default Hero;
