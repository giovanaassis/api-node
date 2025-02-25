import express from "express";
import "./shared/services/TranslationsYup";
import { router } from "./routes/index";

const app = express();

app.use(express.json());
app.use(router);

export default app;