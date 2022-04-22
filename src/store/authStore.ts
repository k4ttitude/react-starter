import produce from 'immer'
import create from 'zustand'
import { persist } from 'zustand/middleware'

const wait = (callback: () => void, timeout: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(() => {
      callback()
      resolve(undefined)
    }, timeout)
  })

type AuthStore = {
  bears: number
  user: { id: number; name: string }
  increasePopulation: () => void

  isLoggedIn: boolean
  loading: boolean
  login: () => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist((set, get) => ({
    bears: 0,
    user: { id: 123, name: 'John Doe' },
    increasePopulation: () =>
      set(
        produce(state => {
          state.bears += 1
          state.user.name = 'another name'
        })
      ),

    isLoggedIn: false,
    loading: false,
    login: async () => {
      set({ loading: true })
      try {
        await wait(() => set({ isLoggedIn: true }), 1000)
      } finally {
        set({ loading: false })
      }
    },
    logout: () => set({ isLoggedIn: false }),
  }))
)
