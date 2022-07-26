const styles = [
  {
    id: 0,
    woodname: "Douglas - enkele planken",
    heigth: "single",
    oriantation: "horizontal",
    plankHeight: 8,
    fixtureMethodes: [1, 2, 3],
    price: 12,
  },
  {
    id: 1,
    woodname: "Douglas - dubbele planken",
    height: "dubble",
    oriantation: "horizontal",
    plankHeight: 4,
    fixtureMethodes: [1, 2],
    price: 6,
  },
  {
    id: 3,
    woodname: "Hard hout",
    height: "dubble",
    oriantation: "vertical",
    plankHeight: 8,
    fixtureMethodes: [1, 2],
    price: 14.98,
  },
  {
    id: 5,
    woodname: "Bamboo",
    height: "single",
    plankHeight: 6,
    oriantation: "horizontal",
    fixtureMethodes: [4],
    price: 20.98,
  },
];
const fixtureMethodes = [
  { name: "Spijkers - Zwart", id: 1, price: 1 },
  { name: "Spijkers - RVS", id: 2, price: 2.5 },
  { name: "Schroeven", id: 3, price: 3 },
  { name: "Clips", id: 4, price: 4.5 },
];
const extras = [
  { name: "Bewatering", id: 1, price: 200, added: false },
  { name: "Verlichting", id: 2, price: 150, added: false },
  { name: "Installatie", id: 3, price: 400, added: false },
  { name: "Hoeklijn", id: 4, price: 200, added: false },
];
const plantingplans = [
  {
    name: "Geen beplanting",
    id: 0,
    price: 0,
  },
  {
    name: "Beplanting plan 1",
    id: 1,
    price: 10,
  },
  {
    name: "Beplanting plan 2",
    id: 2,
    price: 20,
  },
  {
    name: "Beplanting plan 3",
    id: 3,
    price: 30,
  },
];

export { styles, fixtureMethodes, extras, plantingplans };
