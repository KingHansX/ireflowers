import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const CustomOrder = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    flowers: [],
    colors: [],
    size: '',
    message: '',
    occasion: '',
    deliveryDate: '',
    name: '',
    email: '',
    phone: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFlowerSelect = (flower) => {
    setFormData(prev => ({
      ...prev,
      flowers: prev.flowers.includes(flower)
        ? prev.flowers.filter(f => f !== flower)
        : [...prev.flowers, flower]
    }))
  }

  const handleColorSelect = (color) => {
    setFormData(prev => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter(c => c !== color)
        : [...prev.colors, color]
    }))
  }

  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-cursive mb-6">Selecciona tus flores</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {flowers.map(flower => (
                <button
                  key={flower.name}
                  onClick={() => handleFlowerSelect(flower.name)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    formData.flowers.includes(flower.name)
                      ? 'border-[#98D8C1] bg-[#98D8C1] bg-opacity-10'
                      : 'border-gray-200 hover:border-[#98D8C1]'
                  }`}
                >
                  <img
                    src={flower.image}
                    alt={flower.name}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <h3 className="font-semibold">{flower.name}</h3>
                  <p className="text-sm text-gray-600">{flower.description}</p>
                </button>
              ))}
            </div>
          </motion.div>
        )

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-cursive mb-6">Elige los colores</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {colors.map(color => (
                <button
                  key={color.name}
                  onClick={() => handleColorSelect(color.name)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.colors.includes(color.name)
                      ? 'border-[#98D8C1] bg-[#98D8C1] bg-opacity-10'
                      : 'border-gray-200 hover:border-[#98D8C1]'
                  }`}
                >
                  <div
                    className="w-full h-24 rounded-lg mb-2"
                    style={{ backgroundColor: color.value }}
                  />
                  <h3 className="font-semibold text-center">{color.name}</h3>
                </button>
              ))}
            </div>
          </motion.div>
        )

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-cursive mb-6">Detalles del ramo</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tamaño del ramo
                </label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="">Selecciona un tamaño</option>
                  <option value="pequeno">Pequeño</option>
                  <option value="mediano">Mediano</option>
                  <option value="grande">Grande</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ocasión
                </label>
                <select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="">Selecciona una ocasión</option>
                  <option value="cumpleanos">Cumpleaños</option>
                  <option value="aniversario">Aniversario</option>
                  <option value="boda">Boda</option>
                  <option value="graduacion">Graduación</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje personalizado
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="input-field"
                  placeholder="Escribe un mensaje para acompañar tu ramo..."
                />
              </div>
            </div>
          </motion.div>
        )

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-cursive mb-6">Información de contacto</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Tu número de teléfono"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha de entrega
                </label>
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
            </div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-cursive mb-4">
            Arma tu ramo personalizado
          </h1>
          <p className="text-gray-600">
            Crea el ramo perfecto para esa ocasión especial
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map(num => (
              <div
                key={num}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  num <= step ? 'bg-[#98D8C1] text-white' : 'bg-gray-200'
                }`}
              >
                {num}
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-[#98D8C1] rounded-full transition-all duration-300"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Form steps */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {renderStep()}

          {/* Navigation buttons */}
          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="btn-secondary"
              >
                Anterior
              </button>
            )}
            {step < 4 ? (
              <button
                onClick={nextStep}
                className="btn-primary ml-auto"
              >
                Siguiente
              </button>
            ) : (
              <button
                onClick={() => console.log('Submit:', formData)}
                className="btn-primary ml-auto flex items-center gap-2"
              >
                <ShoppingCartIcon className="h-5 w-5" />
                Finalizar pedido
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const flowers = [
  {
    name: 'Rosas',
    description: 'Clásicas y elegantes, perfectas para cualquier ocasión',
    image: 'https://images.unsplash.com/photo-1549560656-9cf5d8c10d6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: 'Lirios',
    description: 'Flores elegantes y fragantes, ideales para arreglos sofisticados',
    image: 'https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: 'Girasoles',
    description: 'Alegres y vibrantes, perfectos para transmitir felicidad',
    image: 'https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: 'Tulipanes',
    description: 'Delicados y elegantes, ideales para diseños minimalistas',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: 'Orquídeas',
    description: 'Exóticas y sofisticadas, perfectas para ocasiones especiales',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    name: 'Peonías',
    description: 'Románticas y exuberantes, ideales para diseños elegantes',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
]

const colors = [
  { name: 'Rojo', value: '#FF0000' },
  { name: 'Rosa', value: '#FF69B4' },
  { name: 'Blanco', value: '#FFFFFF' },
  { name: 'Amarillo', value: '#FFD700' },
  { name: 'Morado', value: '#800080' },
  { name: 'Naranja', value: '#FFA500' },
  { name: 'Verde', value: '#98D8C1' },
  { name: 'Azul', value: '#0000FF' }
]

export default CustomOrder 