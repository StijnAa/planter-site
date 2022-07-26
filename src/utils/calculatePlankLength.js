const calculatePlankLenght = (h, w, l, plankHeight) => {
  return ((l + w) * Math.round(h / plankHeight)) / 100;
};

export default calculatePlankLenght;
