import mongoose from "mongoose";
import { URL_MONGOOSE_API } from "../env/config.js";

try {
  mongoose.connect(URL_MONGOOSE_API);
  console.log("Conectado a mongodb");
} catch (error) {
  console.log("error al conectar con mongodb");
}
