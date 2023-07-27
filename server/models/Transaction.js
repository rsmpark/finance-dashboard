import mongoose from "mongoose";
import Currency, { getCurrency, setCurrency } from "./type/Currency.js";

const Schema = mongoose.Schema;
Schema.Types.Currency = Currency;

const TransactionSchema = new Schema(
  {
    buyer: {
      type: String,
      required: true,
    },
    amount: {
      type: Currency,
      currency: "USD",
      get: getCurrency,
      set: setCurrency,
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;
