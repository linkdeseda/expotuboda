import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Expo', path: '/#laexpo' },
    { name: 'Vestidos de Novia', path: '/#vestidosdenovia' },
    { name: 'Expositores', path: '/#expositores' },
    { name: 'Ganadores', path: '/#regalos' },
    { name: 'Programa', path: '/#programa' },
    { name: 'Registro', path: '/#registro' },
    { name: 'FAQ', path: '/preguntas-frecuentes' },
  ];

  return (
    <header className="bg-brown text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Expo Tu boda" className="h-12" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-white hover:text-beige transition-colors uppercase text-sm"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-brown z-50 md:hidden py-4">
            <nav className="flex flex-col items-center space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-white hover:text-beige transition-colors uppercase text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
