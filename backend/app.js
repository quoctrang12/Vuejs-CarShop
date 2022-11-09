const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error");
const productsRouter= require("./app/routes/product.route");
const usersRouter= require("./app/routes/user.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products',productsRouter);
app.use('/api/users',usersRouter);

app.use((req,res,next)=>{
    return next(new ApiError(404, "Resource not found"));
})

app.use((err,req,res,next)=>{
    return res.status(err.statusCode||500).json({message: err.message||"internal server Error"})
})


module.exports = app;