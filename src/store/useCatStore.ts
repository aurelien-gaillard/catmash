// store/useCatStore.ts
import { create } from 'zustand'

type CatImage = {
  id: string
  url: string
  votes: number
}

type CatStore = {
  cats: CatImage[]
  setCats: (cats: CatImage[]) => void
  voteForCat: (id: string, delta: number) => void
  getTotalVotes: () => number
}

export const useCatStore = create<CatStore>((set, get) => ({
  cats: [],
  setCats: (cats) => set({ cats }),
  voteForCat: (id) =>
    set((state) => ({
      cats: state.cats.map((cat) =>
        cat.id === id ? { ...cat, vote: cat.votes + 1 } : cat
      ),
    })),
  getTotalVotes: () => {
    return get().cats.reduce((sum, cat) => sum + cat.votes, 0)
  },
}))
