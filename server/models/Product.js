import mongoose from "mongoose";
import Currency, { getCurrency, setCurrency } from "./type/Currency.js";

const Schema = mongoose.Schema;
Schema.Types.Currency = Currency;

const ProductSchema = new Schema(
  {
    price: {
      type: Currency,
      currency: "USD",
      get: getCurrency,
      set: setCurrency,
    },
    expense: {
      type: Currency,
      currency: "USD",
      get: getCurrency,
      set: setCurrency,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
