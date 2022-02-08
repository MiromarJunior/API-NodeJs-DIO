const express = require("express");
const bodyParse = require("body-parser");
const userRoute = require("./routers/userRoute");
const res = require("express/lib/response");

const app = express();
app.use(bodyParse.urlencoded({extended : false}));
const port = 3000;

userRoute(app);

/**app.get("/", (res, req) => res.send("Ola mundo express"));*/

app.listen(port, ()=> console.log("API rodando Porta 3000"));
