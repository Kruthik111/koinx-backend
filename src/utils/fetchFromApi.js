import axios from "axios";

async function fetchFromApi(coinIds = []) {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds.join()},&x_cg_demo_api_key=${process.env.COIN_GECKO_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

export { fetchFromApi };
