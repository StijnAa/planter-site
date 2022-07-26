import calculatePlankLenght from "../calculatePlankLength";

const calculateWoodCost = (h,w,l,plankHeight,price) =>{

    const plankLength = calculatePlankLenght(h, w, l, plankHeight);
    return price * plankLength;
}

const calculateWoodCostDif = (state,style) => {
    const cost = calculateWoodCost(
      state.h.value,
      state.w.value,
      state.l.value,
      style.plankHeight,
      style.price
    );
    const current = calculateWoodCost(
      state.h.value,
      state.w.value,
      state.l.value,
      state.style.plankHeight,
      state.style.price
    );
    return cost - current;
  
};



export default calculateWoodCostDif