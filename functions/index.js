const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
import * as Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51I7VqQE3M3bIrOzx3zPdm3NslHE7rtWnfCYGV73sm0kHpAhVBjvLeVur67nHxzO6tduHBRXZAIJJl4Sg4UeyWVQx00YDpVtLoh",
  {
    apiVersion: "2020-08-27", //this value should be whatever api version you are using
  }
);

//API

//API Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json);

//Api routes

app.get("/", (request, response) =>
  response.status(200).send("hello Its Working")
);

//Listen copy command

exports.api = functions.https.onRequest(app);
//http://localhost:5001/clone-cce5c/us-central1/api
