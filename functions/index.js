const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IBjB0L7mopd2cJBL5qEZO6BfQOoidrS2EVM0fh9BveT1UrwzGmapweTBPPh2rsU7wCTWe99eSxpaC6bCOOdN8K200PQmKzNPw"
);

// app config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// api routes
app.get("/", (req, res) => res.status(200).send("hello world :)"));
app.get("/test", (req, res) => res.status(200).send("TEST: todo bien"));

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    console.log("GOT A REQUEST!");
    console.log(total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    // 201 => Payment Created
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });

// listen
exports.api = functions.https.onRequest(app);
