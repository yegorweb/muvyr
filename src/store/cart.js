import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useCart = defineStore('cart', () => {
    let cart = ref(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])
    let total = ref(0)
    cart.value.map(item => total.value += item.price * item.amount)

    watch(cart, (value) => {
        localStorage.setItem('cart', JSON.stringify(value))
        total.value = 0
        cart.value.map(item => total.value += item.price * item.amount)
    }, { deep: true })

    function addItem(item) {
        if (!cart.value.some(milk => milk._id === item._id))
            cart.value.push(Object.assign(item, { amount: 1 }))
    }

    function amountUp(_id) {        
        cart.value[cart.value.findIndex(milk => milk._id === _id)].amount += 1
    }

    function amountDown(_id) {
        let amount = cart.value[cart.value.findIndex(milk => milk._id === _id)].amount
        if (amount < 2) return removeItem(_id)

        cart.value[cart.value.findIndex(milk => milk._id === _id)].amount -= 1
    }

    function removeItem(_id) {
        cart.value = cart.value.filter(item => item._id !== _id)
    }

    function getItem(_id) {
        return cart.value.find(milk => milk._id)
    }

    return { cart, total, addItem, removeItem, amountUp, amountDown, getItem }
})
