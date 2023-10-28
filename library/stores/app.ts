// Utilities
import { defineStore } from "pinia";
// with option api & files json
/*
import catigories from "~/categories.json";
import authors from "~/authors.json";
import create from "~/create.json";
import explore from "~/explore.json";
import prices from "~/prices.json";
import collections from "~/collections.json";
import itemsMarket from "~/itemsMarket.json";
import items from "~/items.json";
import boxs from "~/boxs.json";
export const useAppStore = defineStore("app", {
  state: () => ({
    catigories,
    authors,
    create,
    explore,
    prices,
    itemsMarket,
    collections,
    items,
    boxs,
  }),
});
*/
// with composition api & josn server
export const useAppStore = defineStore("app", () => {
  const authors = ref([]);
  const collections = ref([]);
  const categories = ref([]);
  const create = ref([]);
  const itemsMarket = ref([]);
  const explore = ref([]);
  const sellers = ref([]);
  // Authours
  const getAuthors = async function () {
    const res = await fetch("http://localhost:3000/authors");
    const data = await res.json();
    console.log(data);
    authors.value = data;
  };
  // collections
  const getCollections = async function () {
    const res = await fetch("http://localhost:3000/collections");
    const data = await res.json();
    collections.value = data;
  };
  // categoris
  const getCategories = async function () {
    const res = await fetch("http://localhost:3000/categories");
    const data = await res.json();
    categories.value = data;
  };
  // Create
  const getCreate = async function () {
    const res = await fetch("http://localhost:3000/create");
    const data = await res.json();
    create.value = data;
  };
  const getItemsMarket = async function () {
    const res = await fetch("http://localhost:3000/itemsMarket");
    const data = await res.json();
    itemsMarket.value = data;
  };
  const getExplore = async function () {
    const res = await fetch("http://localhost:3000/explore");
    const data = await res.json();
    explore.value = data;
  };
  const getsellers = async function () {
    const res = await fetch("http://localhost:3000/sellers");
    const data = await res.json();
    sellers.value = data;
  };
  return {
    authors,
    explore,
    categories,
    collections,
    create,
    itemsMarket,
    sellers,
    getAuthors,
    getCreate,
    getCollections,
    getCategories,
    getItemsMarket,
    getExplore,
    getsellers,
  };
});
