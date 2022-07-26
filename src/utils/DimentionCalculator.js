const checkMinMax = (value, dim) => {
  value = value > dim.max ? dim.max : value;
  value = value < dim.min ? dim.min : value;
  return value;
};
const DimentionPlusMin = (plankHeight, value, direction) => {
  return (Math.round(value / plankHeight) + direction) * plankHeight;
};

const DimentionCalculator = (plankHeight, value, dimention, direction = 0) => {
  value = DimentionPlusMin(plankHeight, value, direction);

  return DimentionPlusMin(plankHeight, checkMinMax(value, dimention), 0); 
  // deze functie is echt verschikkelijk. Een plank heeft een afmeeting, 
  // dus als je op plus drukt moet hij 1 plank lengte hoger gaan tenzij hij dan over de max een gaat.
  // idem voor min, en voor als je zelf de slider beweegt.
};

export { DimentionCalculator, checkMinMax };
