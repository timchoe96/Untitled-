const position = (state = "-2000px", action) => {
  switch (action.type) {
    case "POSITION":
      return action.payload;

    default:
      return state;
  }
};

export default position;
