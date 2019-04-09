import axios from "axios";

const ROOT_URL = `http://api.nbp.pl/api/exchangerates/tables/a`;
export const FETCH_CURRENCY = "FETCH_CURRENCY";
export const FETCH_CURRENCY_FAILURE = "FETCH_CURRENCY_FAILURE";

export function fetchCurrency(date) {
  const url = `${ROOT_URL}/${date}/`;

  return function(dispatch) {
    axios
      .get(url)
      .then(response => {
        console.log(response.data, "response");
        return dispatch({
          type: FETCH_CURRENCY,
          data: response.data
        });
      })

      .catch(response =>
        dispatch({
          type: FETCH_CURRENCY_FAILURE,
          error: response.error
        })
      );
  };
}
