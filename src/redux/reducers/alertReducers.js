const initialData = {
  loading: false,
};

const alertReducers = (state = initialData, action) => {
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        loading: action.payload,
      };
    }

    default:
      return state;
  }
};

export default alertReducers;
