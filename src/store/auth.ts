import { create } from "zustand";

interface AuthState {
  loggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  loggedIn: false,
  logIn: () => set({ loggedIn: true }),
  logOut: () => set({ loggedIn: false }),
}));
