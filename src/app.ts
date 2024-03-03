import express, { Request, Response } from "express";
import { appRoutes } from "./routes/appRoutes";
import bodyParser from "body-parser";

class App {
    public express: express.Application;
    constructor() {
        this.express = express();
        this.config();
        this.routes();
    }

    private routes() {
        this.express.get("/", (request: Request, response: Response) => {
            response.json({ data: "Success!" });
        });
        this.express.use("/user", appRoutes);
    }

    private config() {
        this.express.use(bodyParser.json());
    }
}

const app = new App().express;
export default app;
