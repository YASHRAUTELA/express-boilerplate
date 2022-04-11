import express, { Request, Response } from "express";
import { appRoutes } from "./routes/appRoutes";

class App {
    public express: express.Application;
    constructor() {
        this.express = express();
        this.routes();
        this.config();
    }

    private routes() {
        this.express.get("/", (request: Request, response: Response) => {
            response.json({ data: "Success!" });
        });
        this.express.use("/app", appRoutes);
    }

    private config() {}
}

const app = new App().express;
export default app;
