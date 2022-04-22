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

export enum UserRoles {
  ADMIN = 'admin',
  USER = 'user',
}

export type User = { id: number; name: string; role: UserRoles }

type AuthStore = {
  bears: number
  increasePopulation: () => void

  user?: User
  loading: boolean
  login: (u: User) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist((set, get) => ({
    bears: 0,
    increasePopulation: () =>
      set(
        produce(state => {
          state.bears += 1
          state.user.name = 'another name'
        })
      ),

    loading: false,
    login: async (_user: User) => {
      set({ loading: true })
      try {
        await wait(() => set({ user: _user }), 1000)
      } finally {
        set({ loading: false })
      }
    },
    logout: () => set({ user: undefined }),
  }))
)
