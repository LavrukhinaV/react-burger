import { getIngridients } from "../../utils/Api";

export const GET_INITIAL_INGRIDIENTS = "GET_INITIAL_INGRIDIENTS";

export const loadInitialIngridients = () => (dispatch) => {

  getIngridients().then(res => {
    dispatch({
      type: GET_INITIAL_INGRIDIENTS,
      paylod: res.data,
    })
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
};
