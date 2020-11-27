import greenCurry from "./img/green-curry.jpg";
import creamyMushroomPasta from "./img/creamy-mushroom-pasta.jpg";

const i = {
  redOnion: "red onion",
  garlecCloves: "cloves of garlic",
  chilly: "chilly",
  ssGinger: "ss ginger",
  ssGreenCurryPaste: "ss green curry paste",
  dlkokoMilk: "dl koko milk",
  dlVegBroth: "dl veg broth",
  kaffirlimeblader: "kaffierlimeblader",
  ssSoySouce: "ss soy souce",
  lime: "lime",
  brusselsSprouts: "brussels sprouts",
  frozenPeasbagOfFrozenPeas: " bag of frozen peas",
  bagOfSpinach: "bag of spinach",
  noodels: "servings of noodels",
  broccoly: "broccoly",
  boxWhiteBeans: "box of white beans",
  shallots: "shallots",
  mushrooms: "mushrooms",
  gPasta: "grams or pasta",
  gSunDriedTomato: "grams sun-dried tomato",
  nutritionalYeast: "grams of nutritional yeast",
  groundPaprika: "ground paprika",
};

export default [
  {
    title: "Green curry",
    description: "",
    url: "",
    cover: greenCurry,
    ingredients: [
      {
        name: i.redOnion,
        amount: 1,
      },
      {
        name: i.garlecCloves,
        amount: 2,
      },
      {
        name: i.chilly,
        amount: 1,
      },
      {
        name: i.ssGinger,
        amount: 1,
      },
      {
        name: i.ssGreenCurryPaste,
        amount: 3,
      },
      {
        name: i.dlkokoMilk,
        amount: 5,
      },
      {
        name: i.dlVegBroth,
        amount: 3,
      },
      {
        name: i.kaffirlimeblader,
        amount: 6,
      },
      {
        name: i.ssSoySouce,
        amount: 4,
      },
      {
        name: i.lime,
        amount: 1,
      },
      {
        name: i.brusselsSprouts,
        amount: 10,
      },
      {
        name: i.frozenPeasbagOfFrozenPeas,
        amount: 1,
      },
      {
        name: i.bagOfSpinach,
        amount: 1,
      },
      {
        name: i.broccoly,
        amount: 1,
      },
      {
        name: i.boxWhiteBeans,
        amount: 2,
      },
      {
        name: i.noodels,
        amount: 4,
      },
    ],
    steps: [
      "Saute the red onions",
      "Add garlic, chilly and ginger",
      "Add curry paste and part of koko milk and bring to a boil",
      "add the rest of the koko milk and veg broth and boil for 2 min",
      "Add kaffirlimeblader, soy ause, sugar, lime and boil for 2 min",
      "Add brussel sprouts, broccoli and peas",
      "Add spinach and white beans",
      "serve with noodels",
    ],
  },
  {
    title: "One-pot Creamy Mushroom Pasta",
    description: `Pick up limes fantastic One-pot Creamy Mushroom Pasta`,
    url:
      "https://www.pickuplimes.com/single-post/2019/11/21/One-pot-Creamy-Mushroom-Pasta",
    cover: creamyMushroomPasta,
    ingredients: [
      {
        name: i.shallots,
        amount: 2,
      },
      {
        name: i.garlecCloves,
        amount: 6,
      },
      {
        name: i.chilly,
        amount: 1,
      },
      {
        name: i.dlVegBroth,
        amount: 5,
      },
      {
        name: i.dlkokoMilk,
        amount: 4,
      },
      {
        name: i.mushrooms,
        amount: 400,
      },
      {
        name: i.gPasta,
        amount: 400,
      },
      {
        name: i.gSunDriedTomato,
        amount: 30,
      },
      {
        name: i.nutritionalYeast,
        amount: 10,
      },
      {
        name: i.ssSoySouce,
        amount: 4,
      },
      {
        name: i.groundPaprika,
        amount: 4,
      },
    ],
    steps: [
      "In a large pot on high heat, cook the onions, garlic, and chili in oil for 3 minutes, adding a splash of water as needed to deglaze the pan. ",
      "Add remaining ingredients, except for the spinach, bring to a boil then reduce to a simmer with the lid partially covering. Stir occasionally to prevent burning. ",
      "When pasta is al dente, about 12-15 minutes, remove from the heat and add in the spinach. Stir to combine. ",
      "Squeeze on some fresh lemon juice, sprinkle on thinly sliced basil leaves or some red chilli flakes if desired, and enjoy! ",
    ],
  },
];
