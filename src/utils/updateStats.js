import { coinIds } from "../constants.js";
import { Crypto } from "../models/crypto.models.js";
import { fetchFromApi } from "./fetchFromApi.js";

async function updateStats() {
  fetchFromApi(coinIds)
    .then(async (data) => {
      let cryptoArray = [];
      for (let crypto of data) {
        const { id, current_price, market_cap, price_change_24h } = crypto;
        cryptoArray.push({
          coin: id,
          price: current_price,
          marketCap: market_cap,
          "24hChange": price_change_24h,
        });
      }
      const res = await Crypto.insertMany(cryptoArray);
      console.log("Successfully inserted: ", res);
    })
    .catch((error) =>
      console.log("ERROR occcured while updating stats:", error)
    );
}

export { updateStats };
