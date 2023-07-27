import mongoose from "mongoose";

class Currency extends mongoose.SchemaType {
  constructor(key, options) {
    super(key, options, "Currency");
  }

  // `cast()` takes a parameter that can be anything. You need to
  // validate the provided `val` and throw a `CastError` if you
  // can't convert it.
  cast(val) {
    let valStr = String(val);

    const valNum = Math.round(Number(valStr.replace(/[^0-9.-]+/g, "")) * 100);

    if (isNaN(valNum)) {
      throw new Error("Currency: " + val + " is not a number");
    }

    return valStr;
  }
}

export const setCurrency = (val) => {
  return Math.round(Number(val.replace(/[^0-9.-]+/g, "")) * 100);
};

export const getCurrency = (val) => {
  return val / 100;
};

export default Currency;
