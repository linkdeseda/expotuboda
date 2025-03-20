import { useState, FormEvent } from 'react';

const ExpositorContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    state: '',
    city: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        state: '',
        city: '',
        phone: '',
        message: '',
      });

      // Reset the submission status after some time
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-12 px-4 bg-brown text-white" id="expositores">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-cormorant text-center mb-4">
          ¿Eres Expositor y quisieras participar?
        </h2>
        <p className="text-center mb-8">
          Envíanos un mensaje y con gusto te atenderemos
        </p>

        {isSubmitted ? (
          <div className="bg-green-700 border border-green-800 text-white px-4 py-3 rounded relative mb-4">
            <strong className="font-bold">¡Mensaje enviado!</strong>
            <span className="block sm:inline"> Gracias por contactarnos. Te responderemos a la brevedad.</span>
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 text-brown">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="expositor-name" className="block text-gray-700 text-sm font-bold mb-2">
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="expositor-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="expositor-email" className="block text-gray-700 text-sm font-bold mb-2">
                Correo <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="expositor-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="expositor-state" className="block text-gray-700 text-sm font-bold mb-2">
                Estado
              </label>
              <input
                type="text"
                id="expositor-state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="expositor-city" className="block text-gray-700 text-sm font-bold mb-2">
                Ciudad
              </label>
              <input
                type="text"
                id="expositor-city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4 md:col-span-2">
              <label htmlFor="expositor-phone" className="block text-gray-700 text-sm font-bold mb-2">
                Teléfono <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="expositor-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4 md:col-span-2">
              <label htmlFor="expositor-message" className="block text-gray-700 text-sm font-bold mb-2">
                Mensaje (Dudas o comentarios)
              </label>
              <textarea
                id="expositor-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-rust hover:bg-gold text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition-colors ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ExpositorContact;
