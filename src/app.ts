import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import redisClient from "./config/redis";
import { userRoutes } from "./routes/userRoutes";

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
        this.express.use("/user", userRoutes);
    }

    private config() {
        this.express.use(bodyParser.json());
        redisClient.connect();
    }
}

const app = new App().express;
export default app;
