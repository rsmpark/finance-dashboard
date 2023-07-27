import mongoose from "mongoose";
import Currency, { getCurrency, setCurrency } from "./type/Currency.js";

const Schema = mongoose.Schema;
Schema.Types.Currency = Currency;

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: Currency,
      currency: "USD",
      get: getCurrency,
      set: setCurrency,
    },
    expenses: {
      type: Currency,
      currency: "USD",
      get: getCurrency,
      set: setCurrency,
    },
  },
  { toJSON: { getters: true } }
);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: Currency,
      currency: "USD",
      get: getCurrency,
      set: setCurrency,
    },
    expenses: {
      type: Currency,
      currency: "USD",
      get: getCurrency,
      set: setCurrency,
    },
    operationalExpenses: {
      type: Currency,
      currency: "USD",
      get: getCurrency,
      set: setCurrency,
    },
    nonOperationalExpenses: {
      type: Currency,
      currency: "USD",
      get: getCurrency,
      set: setCurrency,
    },
  },
  { toJSON: { getters: true } }
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: Currency,
      currency: "USD",
      get: getCurrency,
      set: setCurrency,
    },
    totalRevenue: {
      type: Currency,
      currency: "USD",
      get: getCurrency,
      set: setCurrency,
    },
    totalExpenses: {
      type: Currency,
      currency: "USD",
      get: getCurrency,
      set: setCurrency,
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: Currency,
        currency: "USD",
        get: getCurrency,
        set: setCurrency,
      },
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
