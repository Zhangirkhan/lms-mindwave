import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    user: {
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
  }),
}) 