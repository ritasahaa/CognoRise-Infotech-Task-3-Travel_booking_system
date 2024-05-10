const express = require("express")
// const router = require("./Routes/CreateUser")
const app = express()
const port = 4000;
const mongoDB=require("./db");
const productApi = require("./Routes/CreateUser");
mongoDB();

app.use(express.json());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:5174");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
})


app.get('/', (req, res) => {
    res.send('Hello World miss')
})

// app.use(express.json());
app.use(productApi)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})