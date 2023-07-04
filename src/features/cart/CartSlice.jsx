import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'
import axios from 'axios'
import { useSelector } from "react-redux";
const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
    productItem: [],
    cartItems: [],
    recentViews: [],
    amount: 0,
    CartTotalAmount: 0,
    CartTotalQuantity: 0,
    isLoading: true,
    isLoggedIn: false
}


export const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
    try {
        const { data } = await axios.get(url)
        return data
    } catch (error) {
        return error?.response
    }
})


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            toast.info(`Cart cleared`, {
                position: 'bottom-left',
                // theme: "dark"
            })
            state.cartItems = []
        },
        addToCart: (state, { payload }) => {
            const itemId = payload.id
            const amount = payload.amount
            const addItem = state.productItem.find(item => item.id === itemId)
            const findProductId = state.productItem.findIndex(item => item.id === itemId)
            const findId = state.cartItems.findIndex(item => item.id === itemId)
            if (findId < 0) {
                state.cartItems = [...state.cartItems, addItem];
                toast.success(`Added ${payload.title} to cart`, {
                    position: 'bottom-left',
                    // theme: "dark"
                })
            }
            if (findId >= 0) {
                state.cartItems[findId].amount += amount
                toast.info(`Increased ${payload.title} quantity in cart`, {
                    position: 'bottom-left',
                    // theme: "dark"
                })
            }
            state.productItem[findProductId].quantityInCart -= 1
        },

        removeItem: (state, { payload }) => {
            const itemId = payload.id
            const amount = payload.amount
            state.cartItems = state.cartItems.filter(item => item.id !== itemId)
            toast.info(`${payload.title} removed from cart`, {
                position: 'bottom-left',
                // theme: "dark"
            })
        },

        increment: (state, { payload }) => {
            const itemId = payload
            const findId = state.cartItems.findIndex(item => item.id === itemId)
            if (state.cartItems[findId].amount >= 1) {
                state.cartItems[findId].amount += 1
            }
        },

        decrement: (state, { payload }) => {
            const itemId = payload
            const findId = state.cartItems.findIndex(item => item.id === itemId)
            if (state.cartItems[findId].amount > 1) {
                state.cartItems[findId].amount -= 1
            } else if (state.cartItems[findId].amount === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== itemId)
                state.amount -= 1

            }
        },
        incrementSpecificProduct: (state, { payload }) => {
            const itemId = payload.id
            const amount = payload.amount
            const findId = state.productItem.findIndex(item => item.id === itemId)
            state.productItem[findId].amount += 1

        },
        decrementSpecificProduct: (state, { payload }) => {
            const itemId = payload.id
            const amount = payload.amount
            const findId = state.productItem.findIndex(item => item.id === itemId)

            if (state.productItem[findId].amount <= 1) {
                state.productItem[findId].amount = 1
            }
            if (state.productItem[findId].amount > 1) {
                state.productItem[findId].amount -= 1

            }

        },
        highToLow: (state, { payload }) => {
            state.productItem = state.productItem.sort((a, b) => b.price - a.price)
        },
        LowToHigh: (state, { payload }) => {
            state.productItem = state.productItem.sort((a, b) => a.price - b.price)
        },
        searchFilter: (state, { payload }) => {
            if (payload.toLowerCase().length <= 0) {
                return state.productItem
            }
            state.productItem = state.productItem.filter(item => item.name.toLowerCase().includes(payload))

        },
        checkLoggedIn: (state, { payload }) => {
            state.isLoggedIn = payload
        },
        searchRecentViews: (state, { payload }) => {
            state.recentViews = [...state.recentViews, payload]
        },
        getTotal: (state, { payload }) => {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItems) => {
                const { price, amount } = cartItems
                const itemTotal = price * amount

                cartTotal.quantity += amount
                cartTotal.total += itemTotal
                return cartTotal

            }, {
                total: 0,
                quantity: 0,
            })
            state.CartTotalAmount = total
            state.CartTotalQuantity = quantity


        }
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true
            state.productItem = []


        },
        [getCartItems.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.productItem = payload

        },
        [getCartItems.rejected]: (state, { payload }) => {
            state.isLoading = true
            state.error = payload
            state.productItem = []



        },

    }

})
export const { addToCart, clearCart, removeItem, increment, decrement, searchRecentViews, getTotal,
    incrementSpecificProduct, decrementSpecificProduct, highToLow, LowToHigh, searchFilter, checkLoggedIn, } = cartSlice.actions
export default cartSlice.reducer
