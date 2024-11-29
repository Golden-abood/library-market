import { itemsMarket } from "../../../data";

export default defineEventHandler((event) => {
  const item = itemsMarket.find(
    (item) => item.id === parseInt(event.context.params!.id)
  );
  return {
    item,
  };
});
