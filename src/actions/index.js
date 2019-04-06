import axios from "axios";

const ROOT_URL = `http://api.nbp.pl/api/exchangerates/tables/a`;
export const FETCH_CURRENCY = "FETCH_CURRENCY";

export function fetchCurrency(date) {
  const url = `${ROOT_URL}/${date}/`;
  const request = axios.get(url);

  return {
    type: FETCH_CURRENCY,
    payload: request
  };
}
