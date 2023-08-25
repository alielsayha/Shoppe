import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};
const initialState = {
  cart: fetchFromLocalStorage(),
  totalValue: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      let exist = state.cart.find((item) => item.id === action.payload.id);
      if (exist) {
        const tempCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
        state.cart = tempCart;
        storeInLocalStorage(state.cart);
      } else {
        state.cart.push({ ...action.payload, qty: action.payload.qty });
        storeInLocalStorage(state.cart);
      }
    },

    removeFromCart: (state, action) => {
      let exist = state.cart.find((item) => item.id === action.payload.id);
      if (exist.qty === 1) {
        const tempCart = state.cart.filter((x) => x.id != action.payload.id);
        state.cart = tempCart;
        storeInLocalStorage(state.cart);
      } else {
        const tempCart = state.cart.map((x) =>
          x.id === action.payload.id ? { ...x, qty: x.qty - 1 } : x
        );
        state.cart = tempCart;
        storeInLocalStorage(state.cart);
      }
    },

    removeAllCart: (state, action) => {
      let tempCart = state.cart.filter((item) => {
        return action.payload.id != item.id;
      });
      state.cart = tempCart;
      storeInLocalStorage(state.cart);
    },

    getCartTotal: (state) => {
      state.totalItems = state.cart.reduce(
        (cartTotal, cartItem) => (cartTotal += cartItem.qty),
        0
      );

      state.totalValue = state.cart.reduce(
        (cartTotal, cartItem) =>
          (cartTotal +=
            cartItem.qty *
            (cartItem.price.toFixed(2) -
              (cartItem.price.toFixed(2) *
                cartItem.discountPercentage.toFixed(2)) /
                100)),
        0
      );
    },
  },
});

export const { addCart, removeAllCart, removeFromCart, getCartTotal } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
