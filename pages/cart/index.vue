<template>
  <div class="container flex flex-col my-5 min-vh-82">
    <h1 class="text-center mb-5">Cart</h1>

    <div v-if="cart.length > 0" class="row justify-content-center">
      <div v-for="item in cart" :key="item.id" class="col-12 col-md-10 mb-4">
        <div class="card">
          <div class="row g-0">
            <div class="col-12 col-md-4 d-flex align-items-center">
              <div class="w-full h-64">
                <img
                  :src="item.image"
                  alt="Product Image"
                  class="object-contain rounded-start w-full h-full"
                />
              </div>
            </div>
            <div class="col-12 col-md-8">
              <div class="card-body">
                <h5 class="card-title text-4xl">{{ item.title }}</h5>
                <p class="card-text text-3xl">
                  Price: <b>{{ item.price }} $</b>
                </p>
                <div
                  class="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3"
                >
                  <div
                    class="d-flex justify-between align-items-center w-100 w-md-50 mb-3 mb-md-0"
                  >
                    <div class="flex gap-4">
                      <input
                        type="number"
                        v-model.number="item.quantity"
                        @change="updateQuantity(item)"
                        min="1"
                        class="form-control w-50"
                        id="quantity"
                      />
                      <button
                        @click="removeFromCart(item.id)"
                        class="btn btn-dark d-flex justify-content-center align-items-center w-10"
                      >
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-summary text-center mt-4">
        <h3>Total: {{ totalAmount.toFixed(2) }} $</h3>
      </div>
    </div>

    <div v-else class="text-center">
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useCartStore } from "../../store/Cart";

const cartStore = useCartStore();

const cart = computed(() => cartStore.cart);

function updateQuantity(item: any) {
  cartStore.updateItemQuantity(item.id, item.quantity);
}

function removeFromCart(id: number) {
  cartStore.removeItem(id);
}

const totalAmount = computed(() => {
  return cart.value.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
});
</script>

<style scoped>
/* From Uiverse.io by vinodjangid07 */
.button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  position: relative;
  gap: 1px;
}

.svgIcon {
  width: 12px;
  transition-duration: 0.3s;
}

.svgIcon path {
  fill: white;
}
</style>
