import { create } from "zustand"
import { persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

type storeStateType = {
    likedIds: string[],
    setLikedIds: (updateLikedIds: string[]) => void;
}

export const store = create<storeStateType>()(persist(immer((set) => ({
    likedIds: [],
    setLikedIds: (updateLikedIds: string[]) => set((status) => {
        status.likedIds = updateLikedIds
    })
})), {
    name: "storage"
}))