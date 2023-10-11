// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  let saw_animation = ref(false)

  function sawAnimation() {
    saw_animation.value = true
  }

  return { saw_animation, sawAnimation }
})
