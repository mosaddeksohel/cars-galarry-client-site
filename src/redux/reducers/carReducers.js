const initialData = {
  cars: ["tata", "layland"],
};

const carsReducrs = (state = initialData, action) => {
  switch (action.type) {
    case "GET_ALL_CARS": {
      return {
        ...state,
        cars: action.payload,
      };
    }
    default:
      return state;
  }
};

export default carsReducrs;
