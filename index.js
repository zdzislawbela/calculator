import { createCalculator } from "./src/calculator/index.js";
import { addListeners } from "./src/eventListeners/index.js";

const startCalculator = () => {
  createCalculator();
  addListeners();
};

startCalculator();
