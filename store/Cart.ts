import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Product } from '../api/dto';

export const useCartStore = defineStore('cart', () => {
  const cart = ref<Product[]>([]);

  function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      cart.value = JSON.parse(savedCart);
    }
  }

  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart.value));
  }

  loadCart();
 
  function updateItemQuantity(id: number, quantity: number) {
    const item = cart.value.find((item) => item.id === id);
    if (item) {
      item.quantity = quantity;
      saveCart(); 
    }
  }

  function removeItem(id: number) {
    cart.value = cart.value.filter((item) => item.id !== id);
    saveCart(); 
  }

  const totalQuantity = computed(() => {
    return cart.value.reduce((total, item) => total + item.quantity, 0);
  });

  watch(cart, saveCart, { deep: true });


  return {
    cart,
    updateItemQuantity,
    removeItem,
    totalQuantity
  };
});
