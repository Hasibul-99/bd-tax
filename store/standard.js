import {create} from 'zustand'

export const standardStore = create((set) => ({
  incomeOptions: [], //[1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  assetsOptions: [], //[17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  expenceOptions: [], //[ 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, ],
  libilityOptions: [], //[49, 50, 51, 52],

  updateIncomeOptions: (options) => {
    let sortArr = options.sort((a, b) => a - b)
    set((state) => ({
      incomeOptions: [...sortArr],
    }))
  },

  updateAssetsOptions: (options) => {
    let sortArr = options.sort((a, b) => a - b)
    set((state) => ({
      assetsOptions: [...sortArr],
    }))
  },

  updateExpenceOptions: (options) => {
    let sortArr = options.sort((a, b) => a - b)
    set((state) => ({
      expenceOptions: [...sortArr],
    }))
  },

  updateLibilityOptions: (options) => {
    let sortArr = options.sort((a, b) => a - b)
    set((state) => ({
      libilityOptions: [...sortArr],
    }))
  },
}))
