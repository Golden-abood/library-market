// Utilities
import { defineStore } from 'pinia'
import catigories from "~/categories.json"
import authors from "~/authors.json"
import create from "~/create.json"
import explore from "~/explore.json"
import prices from '~/prices.json'
import collections from '~/collections.json'
import itemsMarket from '~/itemsMarket.json'
import items from '~/items.json'
import boxs from '~/boxs.json'
export const useAppStore = defineStore('app', {
  state: () => ({
    catigories,
    authors,
    create,
    explore,
    prices,
    itemsMarket,
    collections,
    items,
    boxs
  }),
})
