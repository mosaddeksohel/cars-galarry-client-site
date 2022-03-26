import axios from "axios";

const getAllCars = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("./api/cars/getallcars");
    dispatch({ type: "GET_ALL_CARS", payload: response.data });
  } catch (error) {
    dispatch({ type: "LOADING", payload: false });
  }
};

export default getAllCars;
