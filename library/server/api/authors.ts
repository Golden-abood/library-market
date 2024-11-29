import { authors } from "../../data";

export default defineEventHandler(() => {
  return {
    authors: authors,
  };
});
