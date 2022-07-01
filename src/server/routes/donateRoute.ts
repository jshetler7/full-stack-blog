import * as express from 'express';
import Stripe from 'stripe';
import config from '../config';

//@ts-ignore
const stripe = new Stripe(config.stripe.secret, { apiVersion: '2020-08-27'});

const router = express.Router();

router.post('/', async (req, res) => {
    const paymentMethod = req.body.paymentMethod;
    const amount = req.body.amount;
    try {
        const fulfilled = await stripe.paymentIntents.create({
            currency: 'usd',
            amount: amount * 100,
            payment_method: paymentMethod.id,
            confirm: true
        });
        res.json(fulfilled);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'server error, check the logs'})
    }
})

export default router;