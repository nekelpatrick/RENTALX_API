import express from "express";
import swaggerUi from "swagger-ui-express";
import { router } from "./routes";
import swaggerConfigFile from "./swagger.json";
import "./database";

const app = express();

app.use(express.json());

app.use(
  "/api-documentation",
  swaggerUi.serve,
  swaggerUi.setup(swaggerConfigFile)
);

app.use(router);

app.listen(3333, () => console.log("Server is running"));
