import { useState } from 'react';
import Layout from '../layout/Layout';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: '¿Cuándo y dónde se llevará a cabo la Expo de bodas y XV años?',
      answer: 'La Expo se celebrará el 4,5 y 6 de Julio del 2025 en  el Inforum de Irapuato, Guanajuato. ¡Te esperamos para disfrutar de todo lo que tenemos preparado!'
    },
    {
      question: '¿Necesito comprar boletos para asistir a la Expo?',
      answer: 'No, nuestro evento es totalmente gratuito durante todos los días.'
    },
    {
      question: '¿Qué tipo de proveedores estarán presentes en la Expo?',
      answer: 'Tendremos una gran variedad de proveedores, desde diseñadores de vestidos de novia y quinceañera, fotógrafos, maquillistas, organizadores de eventos, hasta floristas, catering, decoración y mucho más. ¡Todo lo que necesitas para tu boda o XV años lo podrás encontrar aquí!'
    },
    {
      question: '¿Hay estacionamiento disponible en el lugar?',
      answer: 'Sí, habrá estacionamiento disponible en el lugar del evento para los asistentes. Te recomendamos llegar temprano para asegurar tu lugar.'
    }
  ];

  return (
    <Layout>
      <div className="bg-cream py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-cormorant text-center mb-2">
            Preguntas Frecuentes
          </h1>
          <p className="text-center text-gray-600 mb-2 mt-6">
          En #ExpoTuBoda, estamos aquí para hacer tu sueño realidad. 
          </p>

          <p  className="text-center text-gray-600 mb-12">
          Resuelve tus dudas y déjanos guiarte en este viaje hacia el día más especial de tu vida.
          </p>

          <div className="max-w-6xl mx-auto">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="mb-4 border-b border-gray-200 pb-4"
              >
                <button
                  className="w-full flex justify-between items-center text-left font-medium text-lg"
                  onClick={() => toggleQuestion(index)}
                >
                  <span>{item.question}</span>
                  <span className="text-rust ml-2">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="mt-2 text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto">
            <h2 className="text-2xl font-cormorant mb-4">
              Información del Evento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold mb-2">DATOS DEL EVENTO</h3>
                <p className="mb-1">Lugar: Guanajuato - Irapuato</p>
                <p className="mb-1">Av. Siglo XXI 1156, Predio Los Sauces
                </p>
                <p>Fecha: 4, 5 y 6 de Julio 2025</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">ORGANIZADORES</h3>
                <p>
                  Un esfuerzo conjunto del Gobierno de Guanajuato y el Municipio de Irapuato para apoyar a las parejas y promover el talento local.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">CONTACTO</h3>
                <p>Correo: Evnt.11@hotmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
