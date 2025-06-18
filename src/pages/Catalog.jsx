import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline'
import { useCart } from '../context/CartContext'

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [selectedColor, setSelectedColor] = useState('todos')
  const [searchQuery, setSearchQuery] = useState('')
  const { addToCart } = useCart()
  const [addedId, setAddedId] = useState(null)

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory
    const matchesColor = selectedColor === 'todos' || product.colors.includes(selectedColor)
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesColor && matchesSearch
  })

  const handleAdd = (product) => {
    addToCart(product)
    setAddedId(product.id)
    setTimeout(() => setAddedId(null), 1000)
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-cursive mb-4">Catálogo</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explora nuestra colección de arreglos florales para cada ocasión especial
          </p>
        </motion.div>

        {/* Categorías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="relative h-48">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold text-center px-4">
                    {category.name}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-semibold text-[#98D8C1]">
                    ${product.price}
                  </span>
                  <button className="btn-primary">Ver Detalles</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const categories = [
  {
    id: 'bodas-eventos',
    name: 'Bodas y Eventos',
    description: 'Arreglos florales especiales para bodas y eventos importantes',
    image: '/images/categories/bodas-eventos.jpg'
  },
  {
    id: 'cumpleanos',
    name: 'Ramos para Cumpleaños',
    description: 'Hermosos ramos para celebrar cumpleaños',
    image: '/images/categories/cumpleanos.jpg'
  },
  {
    id: 'pesame',
    name: 'Ramos para Fallecimiento',
    description: 'Arreglos florales para expresar condolencias',
    image: '/images/categories/pesame.jpg'
  },
  {
    id: 'decoracion',
    name: 'Decoración de Escenarios',
    description: 'Decoración floral para escenarios y espacios',
    image: '/images/categories/decoracion.jpg'
  }
]

const colors = [
  { value: 'rojo', label: 'Rojo' },
  { value: 'rosa', label: 'Rosa' },
  { value: 'blanco', label: 'Blanco' },
  { value: 'amarillo', label: 'Amarillo' },
  { value: 'morado', label: 'Morado' }
]

const products = [
  {
    id: 1,
    name: 'Ramo de Novia Clásico',
    price: 120,
    category: 'bodas-eventos',
    image: '/images/products/ramo-novia.jpg',
    description: 'Elegante ramo de novia con rosas blancas y verdes'
  },
  {
    id: 2,
    name: 'Centro de Mesa para Eventos',
    price: 85,
    category: 'bodas-eventos',
    image: '/images/products/centro-mesa.jpg',
    description: 'Centro de mesa elegante para eventos especiales'
  },
  {
    id: 3,
    name: 'Ramo de Cumpleaños Colorido',
    price: 65,
    category: 'cumpleanos',
    image: '/images/products/ramo-cumpleanos.jpg',
    description: 'Vibrante ramo de flores para celebrar cumpleaños'
  },
  {
    id: 4,
    name: 'Ramo de Condolencias',
    price: 75,
    category: 'pesame',
    image: '/images/products/ramo-pesame.jpg',
    description: 'Sobrio arreglo floral para expresar condolencias'
  },
  {
    id: 5,
    name: 'Decoración de Escenario Principal',
    price: 250,
    category: 'decoracion',
    image: '/images/products/decoracion-escenario.jpg',
    description: 'Decoración floral completa para escenarios'
  },
  {
    id: 6,
    name: 'Arco Floral para Bodas',
    price: 300,
    category: 'bodas-eventos',
    image: '/images/products/arco-boda.jpg',
    description: 'Elegante arco floral para ceremonias de boda'
  }
]

export default Catalog 