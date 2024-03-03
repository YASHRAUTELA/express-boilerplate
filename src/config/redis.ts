import { createClient } from "redis";
const client = createClient();

client.on("error", (error) => console.log("Redis client error=>", error));
client.on("connect", () => console.log("Redis connected"));

export default client;
