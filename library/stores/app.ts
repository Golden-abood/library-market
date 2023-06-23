// Utilities
import { defineStore } from 'pinia'
import catigories from "~/categories.json"
import authors from "~/authors.json"
import create from "~/create.json"
import explore from "~/explore.json"
import prices from '~/prices.json'
export const useAppStore = defineStore('app', {
  state: () => ({
    catigories,
    authors,
    create,
    explore,
    prices
  }),
})
