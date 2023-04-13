import { create } from 'zustand'

export const useUserStore = create((set) => ({
  currentUser: {
    id:0,
    firstName: '',
    lastName: '',
    favCities:[]
  },
  setUser: (newUser) =>
    set((state) => ({
      currentUser: {
        ...state.currentUser,
        ...newUser,
      },
    })),
}))