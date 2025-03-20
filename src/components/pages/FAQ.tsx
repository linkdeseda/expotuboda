import { useState } from 'react';
import Layout from '../layout/Layout';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: '¿Dónde se lleva a cabo Expo Tu boda?',
      answer: 'Expo Tu boda se lleva a cabo en el World Trade Center (WTC) de la Ciudad de México, ubicado en Calle Filadelfia S/N, (entre calles: Insurgentes y Dakota) Colonia Napoles, Benito Juárez, Ciudad de México CDMX, 03810.'
    },
    {
      question: '¿Cuándo es la próxima edición de Expo Tu boda?',
      answer: 'La próxima edición será los días Mayo 31 y Junio 1, 2025.'
    },
    {
      question: '¿Cuál es el horario de la expo?',
      answer: 'El horario es de 11:00 am a 8:00 pm, tanto el sábado como el domingo.'
    },
    {
      question: '¿Cuánto cuesta la entrada?',
      answer: 'El boleto tiene un costo de $150 pesos cuando se compra en línea antes del evento, y $160 pesos si se compra directamente en taquilla los días del evento.'
    },
    {
      question: '¿Qué puedo encontrar en Expo Tu boda?',
      answer: 'En Expo Tu boda encontrarás una amplia variedad de proveedores para tu boda, incluyendo: vestidos de novia, trajes de novio, joyería, florerías, servicios de fotografía y video, banquetes, salones, pastelería, música, decoración, y mucho más.'
    },
    {
      question: '¿Habrá desfile de vestidos de novia?',
      answer: 'Sí, habrá desfiles de vestidos de novia, pajes y trajes de novio a las 2:00 pm y 6:00 pm en ambos días del evento.'
    },
    {
      question: '¿Cómo puedo llegar a la expo?',
      answer: 'Puedes llegar en transporte público (Metro, Metrobús, etc.) o en auto particular. El WTC cuenta con estacionamiento. Para más detalles, consulta la sección "Cómo llegar" en nuestra página web.'
    },
    {
      question: '¿Habrá promociones especiales durante el evento?',
      answer: 'Sí, la mayoría de los expositores ofrecen descuentos y promociones especiales durante los días del evento. Además, tenemos la dinámica "Compra & Gana" donde puedes obtener regalos como un vestido de novia, argollas de matrimonio y un viaje.'
    },
    {
      question: '¿Cómo puedo participar como expositor?',
      answer: 'Si estás interesado en participar como expositor, puedes contactarnos a través del formulario en nuestra página web o directamente por correo a expomecaso@ovalmedia.com.mx.'
    },
    {
      question: '¿Puedo comprar boletos en línea?',
      answer: 'Sí, puedes comprar tus boletos en línea a través de Boletia con un precio preferencial de $150 pesos. El día del evento, el precio en taquilla será de $160 pesos.'
    }
  ];

  return (
    <Layout>
      <div className="bg-cream py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-cormorant text-center mb-2">
            Preguntas Frecuentes
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Resuelve todas tus dudas sobre #ExpoMeCaso
          </p>

          <div className="max-w-3xl mx-auto">
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

          <div className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
            <h2 className="text-2xl font-cormorant mb-4">
              Información del Evento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold mb-2">DATOS DEL EVENTO</h3>
                <p className="mb-1">Lugar: WTC Ciudad de México</p>
                <p>Fecha: Mayo 31 y Junio 1, 2025</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">SOBRE LOS ORGANIZADORES</h3>
                <p>
                  OVALMEDIA y WTC Ciudad de México unen esfuerzos para la organización de este gran evento.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">CONTACTO</h3>
                <p className="mb-1">
                  Whatsapp: Da clic en el ícono en parte inferior derecha
                </p>
                <p>Correo: expomecaso@ovalmedia.com.mx</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
