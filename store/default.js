import {create} from 'zustand'

export const defaultStore = create((set) => ({
  taxDue: 0,

  updateTaxDue: (options) => {
    set((state) => ({
      taxDue: options,
    }))
  },
}))
