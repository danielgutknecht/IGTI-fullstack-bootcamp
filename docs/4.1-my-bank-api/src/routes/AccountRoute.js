import express from "express";
import { createAccount, getAccount, credit } from "../controller/AccountController.js";

const accountRouter = express.Router();

accountRouter.get("/", (req, res) => {
  res.json({ message: "Welcome to application!" });
});

accountRouter.get("/getAccount", async (req, res) => {
  let {agencia, conta} = req.body;
  try{
    const account = await getAccount(agencia, conta);
    res.send(account);
  }catch (error) {
    res.status(error.statusCode).send({error: error.message});
  }
})

accountRouter.post("/create", async (req, res) => {
  let {agencia, conta, valor} = req.body;
  try{
    const account = await createAccount(agencia, conta, valor);
    res.send(account);
  }catch (error) {
    res.status(error.statusCode).send({error: error.message});
  }
})

accountRouter.put('/deposit', async (req, res) => {
  let { agencia, conta, valor } = req.body;
  try {
    const balance = await credit(agencia, conta, valor);
    res.send(balance);
  } catch (err) {
    res.status(err.statusCode).send({ error: err.message });
  }
});


export { accountRouter };
