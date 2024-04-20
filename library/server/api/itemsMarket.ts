export default defineEventHandler(() => {
  const itemsMarket = [
    {
      photo: "/images/market-01.jpg",
      title: "Music Art Super Item",
      Current: "3.64 ETH",
      sa: "($6,600.00)",
      "Ends ": "6D 05H 40M 50S",
      date: "(July 28th, 2022)",
      category: "music",
    },
    {
      photo: "/images/market-01.jpg",
      title: "Digital Crypto Artwork",
      Current: "3.64 ETH",
      sa: "($7,600.00)",
      "Ends ": "4D 05H 40M 50S",
      date: "(July 5th, 2022)",
      category: "digital",
    },
    {
      photo: "/images/market-01.jpg",
      title: "Blockchain Item One",
      Current: "1.64 ETH",
      sa: "($1,600.00)",
      "Ends ": "9D 05H 40M 50S",
      date: "(July 28th, 2022)",
      category: "blockchain",
    },
    {
      photo: "/images/market-01.jpg",
      title: "Virtual Currency Art",
      Current: "8.64 ETH",
      sa: "($1,600.00)",
      "Ends ": "8D 05H 40M 50S",
      date: "(July 14th, 2022)",
      category: "virtual",
    },
    {
      photo: "/images/market-01.jpg",
      title: "Digital Art Item",
      Current: "6.64 ETH",
      sa: "($7,600.00)",
      "Ends ": "6D 07H 40M 50S",
      date: "(July 13th, 2021)",
      category: "digital",
    },
    {
      photo: "/images/market-01.jpg",
      title: "Blockchain Music Design",
      Current: "1.64 ETH",
      sa: "($6,650.00)",
      "Ends ": "2D 05H 40M 50S",
      date: "(July 18th, 2022)",
      category: "blockchain",
    },
  ];
  const itemsFilter = (category?: string) => {
    if (category) {
      const items = itemsMarket.filter((el) => el.category === category);
      return items;
    } else return itemsMarket;
  };
  return {
    itemsMarket: itemsFilter(),
  };
});
