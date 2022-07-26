import calculatePlankLenght from "../calculatePlankLength";

// TODO: state vanuit context

const calculateFixtureCost = (h, w, l, plankHeight, fixturePrice) => {
  return fixturePrice * calculatePlankLenght(h, w, l, plankHeight);
};

const calculateFixtureCostDif = (state, fixtureMethode) => {
  const cost = calculateFixtureCost(
    state.h.value,
    state.w.value,
    state.l.value,
    state.style.plankHeight,
    fixtureMethode.price
  );
  const current = calculateFixtureCost(
    state.h.value,
    state.w.value,
    state.l.value,
    state.style.plankHeight,
    state.fixtureMethode.price
  );

  return cost - current;
};
export default calculateFixtureCostDif;
