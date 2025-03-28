import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Importa useNavigate y useLocation
import logo from '../../assets/images/LogoHeaderPrueba.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from '../styles/header.module.css';

interface HeaderProps {
  overviewRef?: React.RefObject<HTMLDivElement>; // Acepta la referencia como prop
}

const Header = ({ overviewRef }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Para redirigir al home
  const location = useLocation(); // Para verificar la ruta actual

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScrollToOverview = () => {
    if (location.pathname !== '/') {
      navigate('/');
      overviewRef?.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si ya estamos en el home, hacemos el scroll directamente
      overviewRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Quiénes somos', action: handleScrollToOverview },
    { name: 'Desfile', path: '/desfile-eventos' },
    { name: 'Expositores', path: '/expositores' },
    { name: 'Concursos', path: '/concursos' },
    { name: 'Programación', path: '/programacion' },
    { name: 'Patrocinadores', path: '/patrocinadores' },
    { name: 'FAQ', path: '/preguntas-frecuentes' },
  ];

  return (
    <header className="bg-brown text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Expo Boda Event" className={`h-12 ${styles.logoHeader}`} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action || (() => navigate(item.path))}
              className="text-white hover:text-beige transition-colors uppercase text-sm"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-brown z-50 lg:hidden py-4">
            <nav className="flex flex-col items-center space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action || (() => navigate(item.path))}
                  className="text-white hover:text-beige transition-colors uppercase text-sm"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;