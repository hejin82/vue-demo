var data = [
  {
    id: 1,
    name: "kayak1",
    category: "watersports1",
    description: "a boat for one person",
    price: 275
  },
  {
    id: 2,
    name: "kayak2",
    category: "watersports1",
    description: "a boat for one person",
    price: 275
  },
  {
    id: 3,
    name: "kayak3",
    category: "watersports2",
    description: "a boat for one person",
    price: 275
  },
  {
    id: 4,
    name: "kayak4",
    category: "watersports2",
    description: "a boat for one person",
    price: 275
  },
  {
    id: 5,
    name: "kayak5",
    category: "watersports3",
    description: "a boat for one person",
    price: 275
  }
];
module.exports = function() {
  return {
    products: data,
    categories: [...new Set(data.map(p => p.category))].sort(),
    orders: []
  };
};
