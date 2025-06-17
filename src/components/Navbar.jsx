import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useCart } from '../context/CartContext'
import CartPanel from './CartPanel'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { cartCount } = useCart()

  useEffect(() => {
    const dark = localStorage.getItem('theme') === 'dark'
    setIsDark(dark)
    document.documentElement.classList.toggle('dark', dark)
  }, [])

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    document.documentElement.classList.toggle('dark', newDark)
    localStorage.setItem('theme', newDark ? 'dark' : 'light')
  }

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-cursive text-[#98D8C1]">Irene Flowers</h1>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 dark:text-gray-100 hover:text-[#98D8C1] transition-colors">Inicio</Link>
              <Link to="/catalogo" className="text-gray-700 dark:text-gray-100 hover:text-[#98D8C1] transition-colors">Catálogo</Link>
              <Link to="/personalizado" className="text-gray-700 dark:text-gray-100 hover:text-[#98D8C1] transition-colors">Personalizados</Link>
              <Link to="/nosotros" className="text-gray-700 dark:text-gray-100 hover:text-[#98D8C1] transition-colors">Nosotros</Link>
              <Link to="/contacto" className="text-gray-700 dark:text-gray-100 hover:text-[#98D8C1] transition-colors">Contacto</Link>
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-100">
                {isDark ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
              </button>
              <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-100" onClick={() => setCartOpen(true)}>
                <ShoppingCartIcon className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#F8BBD0] text-white text-xs rounded-full px-1.5 py-0.5">{cartCount}</span>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-100 hover:text-[#98D8C1] focus:outline-none"
              >
                <span className="sr-only">Abrir menú</span>
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-900`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 dark:text-gray-100 hover:text-[#98D8C1]">Inicio</Link>
            <Link to="/catalogo" className="block px-3 py-2 text-gray-700 dark:text-gray-100 hover:text-[#98D8C1]">Catálogo</Link>
            <Link to="/personalizado" className="block px-3 py-2 text-gray-700 dark:text-gray-100 hover:text-[#98D8C1]">Personalizados</Link>
            <Link to="/nosotros" className="block px-3 py-2 text-gray-700 dark:text-gray-100 hover:text-[#98D8C1]">Nosotros</Link>
            <Link to="/contacto" className="block px-3 py-2 text-gray-700 dark:text-gray-100 hover:text-[#98D8C1]">Contacto</Link>
            <button onClick={toggleTheme} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-100 hover:text-[#98D8C1]">{isDark ? 'Modo claro' : 'Modo oscuro'}</button>
            <button className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-100 hover:text-[#98D8C1] relative" onClick={() => setCartOpen(true)}>
              Carrito
              {cartCount > 0 && (
                <span className="ml-2 bg-[#F8BBD0] text-white text-xs rounded-full px-1.5 py-0.5">{cartCount}</span>
              )}
            </button>
          </div>
        </motion.div>
      </nav>
      <CartPanel open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}

export default Navbar 