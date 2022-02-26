const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JBBEdSAtKj8RHXX16HyxmZBLonSTdg2E6xwh0WllX7M118So4BFCIzJpUOXpLfAJkW5EXKucg8M038nMAconHLB00g8LJ6TfG')

//API


//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request recieved Boom!!!  for this amount >>> ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen Command

exports.api = functions.https.onRequest(app);

//http://localhost:5001/challenge-e2edf/us-central1/api