import { writable } from "svelte/store"

export interface UserStore {
  email?: string
  name?: string
}

export const userStore = writable<UserStore>({})
