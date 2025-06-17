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
          <h1 className="text-4xl md:text-5xl font-cursive mb-4">Nuestro Catálogo</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora nuestra colección de arreglos florales únicos y encuentra el perfecto para cada ocasión
          </p>
        </motion.div>

        {/* Filtros y búsqueda */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input-field max-w-xs"
            >
              <option value="todos">Todas las categorías</option>
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="input-field max-w-xs"
            >
              <option value="todos">Todos los colores</option>
              {colors.map(color => (
                <option key={color.value} value={color.value}>
                  {color.label}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field"
            />
          </div>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
                  <HeartIcon className="h-6 w-6 text-gray-600" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-cursive text-[#98D8C1]">
                    ${product.price}
                  </span>
                  <button
                    className={`btn-primary flex items-center gap-2 ${addedId === product.id ? 'bg-green-400' : ''}`}
                    onClick={() => handleAdd(product)}
                  >
                    <ShoppingCartIcon className="h-5 w-5" />
                    {addedId === product.id ? 'Agregado!' : 'Agregar'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mensaje cuando no hay resultados */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No se encontraron productos que coincidan con tu búsqueda.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

const categories = [
  { value: 'ramos', label: 'Ramos' },
  { value: 'arreglos', label: 'Arreglos' },
  { value: 'bodas', label: 'Bodas' },
  { value: 'eventos', label: 'Eventos' },
  { value: 'suculentas', label: 'Suculentas' }
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
    name: 'Ramo de Rosas Rojas',
    description: 'Hermoso ramo de rosas rojas con follaje verde',
    price: 45.99,
    category: 'ramos',
    colors: ['rojo', 'verde'],
    image: 'https://images.unsplash.com/photo-1549560656-9cf5d8c10d6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    name: 'Arreglo Primaveral',
    description: 'Colorido arreglo con flores de temporada',
    price: 55.99,
    category: 'arreglos',
    colors: ['rosa', 'amarillo', 'morado'],
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 3,
    name: 'Ramo de Novia',
    description: 'Elegante ramo de novia con rosas blancas y verdes',
    price: 89.99,
    category: 'bodas',
    colors: ['blanco', 'verde'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 4,
    name: 'Centro de Mesa',
    description: 'Centro de mesa para eventos con flores variadas',
    price: 65.99,
    category: 'eventos',
    colors: ['rosa', 'blanco', 'morado'],
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 5,
    name: 'Set de Suculentas',
    description: 'Conjunto de suculentas en macetas decorativas',
    price: 39.99,
    category: 'suculentas',
    colors: ['verde'],
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 6,
    name: 'Ramo de Girasoles',
    description: 'Alegre ramo de girasoles con follaje complementario',
    price: 49.99,
    category: 'ramos',
    colors: ['amarillo', 'verde'],
    image: 'https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
]

export default Catalog 