import {create} from 'zustand'

export const standardStore = create((set) => ({
  incomeOptions: [1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  assetsOptions: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  expenceOptions: [],
  libilityOptions: [],

  updateIncomeOptions: (options) =>
    set((state) => ({
      incomeOptions: [...options],
    })),

  updateAssetsOptions: (options) =>
    set((state) => ({
      assetsOptions: [...options],
    })),

  updateExpenceOptions: (options) =>
    set((state) => ({
      expenceOptions: [...options],
    })),

  updateLibilityOptions: (options) =>
    set((state) => ({
      libilityOptions: [...options],
    })),
}))
