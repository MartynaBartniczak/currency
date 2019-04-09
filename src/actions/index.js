import axios from "axios";

const ROOT_URL = `http://api.nbp.pl/api/exchangerates/tables/a`;
export const FETCH_CURRENCY = "FETCH_CURRENCY";

export async function fetchCurrency(date) {
  const url = `${ROOT_URL}/${date}/`;
  const request = await axios.get(url);
  console.log(request, "request");

  return {
    type: FETCH_CURRENCY,
    payload: request
  };
}
