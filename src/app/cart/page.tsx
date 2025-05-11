"use client";

import React, { useState } from 'react'; // Removed useEffect
import { useCart } from '@/context/CartContext';
import type { CartItem } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image'; // Import Next/Image
import { QRCodeSVG } from 'qrcode.react';
import { FiTrash2, FiX, FiShoppingCart, FiArrowLeft, FiCreditCard } from 'react-icons/fi'; // Using react-icons

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const handleProceedToCheckout = () => {
    if (cartItems.length > 0) {
      setIsCheckoutModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsCheckoutModalOpen(false);
  };

  const generateOrderSummaryTextForModal = (): string => {
    if (cartItems.length === 0) return "No items in cart.";
    return cartItems.map(item => `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`).join('\n');
  };

  const generateOrderSummaryForQR = (): string => {
    if (cartItems.length === 0) return "Empty Cart";
    const firstFewItems = cartItems.slice(0, 3).map(item => item.name).join(', ');
    const totalItemsCount = cartItems.length;
    let summary = `${totalItemsCount} item(s): ${firstFewItems}`;
    if (totalItemsCount > 3) {
      summary += ', and more';
    }
    return summary;
  };
  
  const telegramUsername = "sethchan1";
  const telegramMessage = encodeURIComponent(`Order Confirmation:\nItems: ${generateOrderSummaryForQR()}\nTotal: $${totalPrice.toFixed(2)}\nPlease confirm your order with @${telegramUsername}.`);
  const telegramLink = `tg://resolve?domain=${telegramUsername}&text=${telegramMessage}`;

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[calc(100vh-200px)]"> {/* Adjusted min-height and padding */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-800">
        <FiShoppingCart className="inline-block mr-3 mb-1 text-red-500" size={36} />
        Your Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-12 bg-white shadow-lg rounded-lg p-8">
          <FiShoppingCart size={64} className="mx-auto text-gray-400 mb-6" />
          <p className="mt-6 text-2xl font-semibold text-gray-700">Your cart is wonderfully empty.</p>
          <p className="mt-2 text-md text-gray-500 mb-8">Looks like you haven&apos;t added anything to your cart yet.</p>
          <Link 
            href="/" 
            className="mt-8 inline-flex items-center bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
          >
            <FiArrowLeft className="mr-2" />
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Product</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Price</th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">Quantity</th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">Total</th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cartItems.map((item: CartItem) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-16 w-16 mr-4 relative"> {/* Added relative for Image */}
                            <Image 
                              src={item.image || '/assets/a.jpg'} // Fallback image
                              alt={item.name} 
                              layout="fill" // Use layout fill
                              objectFit="cover" // Ensure image covers the area
                              className="rounded-md shadow-sm" 
                            />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">{item.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${item.price.toFixed(2)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="px-3 py-1 border border-gray-300 rounded-l-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => {
                                const inputValue = e.target.value;
                                if (inputValue === '') {
                                    // Let input be empty, onBlur will fix to 1 if left empty
                                } else {
                                    const newQuantity = Number.parseInt(inputValue, 10); // Changed to Number.parseInt
                                    if (!Number.isNaN(newQuantity) && newQuantity > 0) { // Changed to Number.isNaN
                                        updateQuantity(item.id, newQuantity);
                                    }
                                    // If newQuantity is <=0 or NaN, input shows invalid text, onBlur will fix
                                }
                            }}
                            onBlur={(e) => {
                                const inputValue = e.target.value;
                                const newQuantity = Number.parseInt(inputValue, 10); // Changed to Number.parseInt
                                if (Number.isNaN(newQuantity) || newQuantity <= 0) { // Changed to Number.isNaN. Catches empty string (parseInt(\'\') is NaN), "abc", "0", "-5"
                                    updateQuantity(item.id, 1);
                                }
                                // If input was valid & positive, it\'s already updated by onChange.
                            }}
                            className="w-12 px-2 py-1 border-t border-b border-gray-300 text-sm text-gray-900 tabular-nums text-center focus:outline-none focus:ring-1 focus:ring-red-400"
                            aria-label="Item quantity"
                           />
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 border border-gray-300 rounded-r-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold text-right">${(item.price * item.quantity).toFixed(2)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-red-400 rounded p-1"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/" className="text-red-500 hover:text-red-700 font-medium hover:underline transition-colors duration-150 flex items-center text-sm">
                <FiArrowLeft className="mr-1.5" />
                Continue Shopping
              </Link>
              <button 
                type="button"
                onClick={clearCart}
                className="text-gray-600 hover:text-red-600 font-medium hover:underline transition-colors duration-150 flex items-center text-sm"
              >
                 <FiTrash2 className="mr-1.5" />
                Clear Cart
              </button>
            </div>
            <div className="text-right w-full md:w-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-1">Total: <span className="text-red-600">${totalPrice.toFixed(2)}</span></h2>
              <p className="text-xs text-gray-500 mb-4">Shipping & taxes calculated at checkout (if applicable).</p>
              <button 
                type="button"
                onClick={handleProceedToCheckout}
                disabled={cartItems.length === 0}
                className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-10 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                <FiCreditCard className="mr-2" />
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}

      {isCheckoutModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-[1000] transition-opacity duration-300 ease-in-out" 
          // role="dialog" // Removed role="dialog" to resolve linting error, will rely on aria-modal
          aria-modal="true" 
          aria-labelledby="checkout-modal-title"
          onClick={closeModal} // Close on backdrop click
        >
          <div 
            className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl max-w-lg w-full transform transition-all duration-300 ease-in-out scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <div className="flex justify-between items-center mb-6 pb-3 border-b border-gray-200">
              <h2 id="checkout-modal-title" className="text-xl sm:text-2xl font-semibold text-gray-800">Confirm Order & Pay</h2>
              <button 
                onClick={closeModal} 
                className="text-gray-400 hover:text-gray-600 text-3xl sm:text-4xl font-light leading-none transition-colors duration-200 p-1 -m-1 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400"
                aria-label="Close modal"
              >
                <FiX />
              </button>
            </div>
            
            <div className="mb-6 space-y-3">
              <h3 className="text-md font-medium text-gray-700">Order Summary:</h3>
              <pre className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md max-h-40 overflow-y-auto whitespace-pre-wrap font-sans">
                {generateOrderSummaryTextForModal()}
              </pre>
              <p className="text-lg font-semibold text-gray-800 pt-2 border-t border-gray-100 mt-3">Total Amount: <span className="text-red-600">${totalPrice.toFixed(2)}</span></p>
            </div>

            <div className="mb-6 text-center p-4 border border-gray-200 rounded-lg bg-gray-50">
              <p className="text-sm text-gray-700 mb-3">
                Scan QR with Telegram to contact <strong className="text-gray-900">@{telegramUsername}</strong> and finalize your order:
              </p>
              <div className="flex justify-center items-center p-3 bg-white rounded-lg shadow-sm border border-gray-300 mx-auto" style={{ minHeight: '176px', minWidth: '176px', width:'fit-content' }}> {/* Adjusted QR size */}
                {telegramLink && <QRCodeSVG value={telegramLink} size={160} level="H" includeMargin={true} bgColor="#ffffff" fgColor="#000000" />}
              </div>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-2 mb-6 px-2">
              You will be directed to Telegram to chat with <span className="font-mono bg-gray-100 px-1 py-0.5 rounded text-gray-700">@{telegramUsername}</span>. 
              Please send the pre-filled message to confirm your order details.
            </p>
            <a 
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mb-3"
            >
              Open in Telegram
            </a>
            <button 
              onClick={closeModal} 
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2.5 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;
