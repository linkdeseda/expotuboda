import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/LogoHeaderPrueba.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from '../styles/header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Quiénes somos', path: '/quienes-somos' },
    { name: 'Desfile', path: '/desfile-eventos' },
    { name: 'Expositores', path: '/expositores' },
    { name: 'Concursos', path: '/concursos' },
    { name: 'Programación', path: '/programacion' },
    { name: 'Expositores', path: '/registro' },
    { name: 'Patrocinadores', path: '/registro' },
    { name: 'FAQ', path: '/preguntas-frecuentes' },
  ];

  return (
    <header className="bg-brown text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Expo Tu boda" className={`h-12 ${styles.logoHeader}`} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
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
          <div className="absolute top-16 left-0 right-0 bg-brown z-50 lg:hidden py-4">
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