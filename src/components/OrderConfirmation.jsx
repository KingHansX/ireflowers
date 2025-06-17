import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'

const OrderConfirmation = ({ order, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-md w-full p-6"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <CheckCircleIcon className="h-8 w-8 text-green-500" />
            <h2 className="text-2xl font-cursive text-[#98D8C1]">¡Pedido Confirmado!</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Detalles del Pedido</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Número de orden: <span className="font-medium">{order.id}</span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Fecha: <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Productos</h3>
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Cantidad: {item.qty} x ${item.price}
                  </p>
                </div>
                <p className="font-medium">${(item.qty * item.price).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="border-t dark:border-gray-700 pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
              <span>${order.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 dark:text-gray-300">Envío</span>
              <span>${order.shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center font-semibold text-lg">
              <span>Total</span>
              <span className="text-[#98D8C1]">${order.total.toFixed(2)}</span>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
            <p className="text-sm text-green-800 dark:text-green-200">
              Te enviaremos un correo electrónico con los detalles de tu pedido y el seguimiento.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default OrderConfirmation 