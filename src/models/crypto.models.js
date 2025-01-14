import mongoose from "mongoose";

const cryptoSchema = new mongoose.Schema(
  {
    coin: {
      type: String,
      required: [true, "coin name required"],
      lowercase: true,
    },
    price: {
      type: Number,
      required: true,
    },
    marketCap: {
      type: Number,
      required: true,
    },
    "24hChange": {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Crypto = mongoose.model("Crypto", cryptoSchema);
