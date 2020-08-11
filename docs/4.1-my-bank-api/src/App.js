import express from "express";
import {connect} from './config/DbConnection.js'
import {accountRouter} from './routes/AccountRoute.js'

const app = express();
const port = 3000;

connect();

app.use(express.json());

app.use('/account', accountRouter);


app.listen(port, () => {
  console.log("API started!!!");
});
