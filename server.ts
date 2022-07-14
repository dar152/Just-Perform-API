import express, { json } from "express";
import cors from "cors";
const app = express();
import { json as _json } from "body-parser";
// const pool = require('./db');

import accounts from "./accounts";
import media from './media';

//Middleware
app.use(
    cors({
        origin: ["https://localhost:3000"]
    })
);

app.use(json());
app.use(
    _json({
        limit: "10mb",
    })
);

app.use("/accounts", accounts);
app.use("/media", media);



app.listen(3000, () => {
    console.log("Server started on port 3000");
});
