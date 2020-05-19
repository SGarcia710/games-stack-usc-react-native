export const generateLevelsGameOne = levelsQuantity => {
  let levels = new Array();
  for (let i = 0; i < levelsQuantity; i++) {
    levels.push(Math.floor(Math.random() * 1));
  }
  return levels;
};
