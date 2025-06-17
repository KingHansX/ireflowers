import React from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/outline'

const CartPanel = ({ open, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart()

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: open ? 0 : '100%' }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col ${open ? '' : 'pointer-events-none'}`}
    >
      <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
        <h2 className="text-2xl font-cursive text-[#98D8C1]">Tu carrito</h2>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-100">
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {cart.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center mt-8">Tu carrito está vacío.</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{item.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Cantidad: {item.qty}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">${item.price} c/u</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="p-2 hover:text-red-500 text-gray-700 dark:text-gray-100">
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          ))
        )}
      </div>
      <div className="p-4 border-t dark:border-gray-700 flex flex-col gap-2">
        <button
          className="btn-primary w-full"
          disabled={cart.length === 0}
          onClick={() => {
            alert('¡Pedido enviado! (simulado)')
            clearCart()
            onClose()
          }}
        >
          Finalizar pedido
        </button>
        <button
          className="btn-secondary w-full"
          disabled={cart.length === 0}
          onClick={clearCart}
        >
          Vaciar carrito
        </button>
      </div>
    </motion.div>
  )
}

export default CartPanel 