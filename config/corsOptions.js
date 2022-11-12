import { allowedOrigins } from "./allowedOrigins.js";

export const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      //only origins listed in array || postman and others are allowed
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
  //default is 204 but gets error with smart tv old blowsers
};
