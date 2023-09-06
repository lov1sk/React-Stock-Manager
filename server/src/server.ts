import express from "express";
import cors from "cors";
import database from "./config/database";
import { routes } from "./routes";

const app = express();
database.startMongoDb();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333, () => console.log("🚀 Server running at :3333"));
