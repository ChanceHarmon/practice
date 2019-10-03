export default (state = [], { type, payload }) => {
  switch (type) {
    case 'FOOD_LOAD':
      return payload;
    default:
      return state;
  }
};