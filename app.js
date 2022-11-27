import express from "express";
import { PUERTO } from "./env/config.js";
import route from "./routes/user.route.js";
import "./databases/conexion.js";
import cors from 'cors'

const app = express();
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1", route);

app.listen(PUERTO, () => {
  console.log("Servidor corriendo en el puerto --> ", PUERTO);
});
