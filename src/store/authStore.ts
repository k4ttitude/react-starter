import produce from 'immer'
import create from 'zustand'
import { persist } from 'zustand/middleware'

type AuthStore = {
  bears: number
  user: { id: number; name: string }
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
  }))
)
