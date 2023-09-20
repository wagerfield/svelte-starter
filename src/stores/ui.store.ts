import { writable } from "svelte/store"

export interface UIStore {
  menuOpen: boolean
}

export const uiStore = writable<UIStore>({
  menuOpen: false,
})
