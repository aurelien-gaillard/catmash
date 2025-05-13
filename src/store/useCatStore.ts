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
  voteForCat: (id: string) => void
  getTotalVotes: () => number
  getTwoRandomCats: () => CatImage[]
}

export const useCatStore = create<CatStore>((set, get) => ({
  cats: [],
  setCats: (cats) => set({ cats }),
  voteForCat: (id) =>
    set((state) => ({
      cats: state.cats.map((cat) =>
        cat.id === id ? { ...cat, votes: cat.votes + 1 } : cat
      ),
    })),
  getTotalVotes: () => {
    return get().cats.reduce((sum, cat) => sum + cat.votes, 0)
  },
  getTwoRandomCats: () => {
    const cats = get().cats
    if (cats.length < 2) return []

    const shuffled = [...cats].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 2)
  },
}))
