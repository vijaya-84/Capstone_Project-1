const express = require("express");

const app = express();

const port =process.env.POST || 3000;
const host =process.env.HOST || "localhost";
    

app.listen(port, () => {

    console.log(`express server listening at http://${host}:${port}`)

});
