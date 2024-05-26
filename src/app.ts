import express from "express";
import { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import * as swaggerFile from "../swagger_output.json";

const app = express();

// setup for use json on requests
app.use(express.json());
// setup for swagger
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

export default app;
