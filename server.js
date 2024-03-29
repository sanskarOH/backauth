const express = require('express');
const dotenv = require('dotenv'); 
const AuthRouter = require('./routes/authroutes')
const UserRouter = require('./routes/userRoute')
dotenv.config(); 
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.json());
app.use("/auth", AuthRouter);
app.use(UserRouter);

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
