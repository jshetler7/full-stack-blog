import * as React from "react";
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Donate = (props: DonateProps) => {

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement) 
    if(!cardElement) return;
    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement
        });
        if (error) {
            console.log('error', error)
        } else {
            console.log('paymentMethod', paymentMethod);

            const res = await fetch('/api/donate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ amount, paymentMethod })
            });

            const paymentSuccess = await res.json();

            console.log(paymentSuccess);
            //setThankYou(true);
        }
    };

  return (
    <main className="container">
      <section className="row mt-5 justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center text-light">Feeling Generous?</h1>
          <form className="form-group p-3 border rounded-lg">
            <input
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="form-control mt-3"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <CardElement className="form-control mt-3" />
            <button className="btn btn-outline-light mt-3" onClick={handleSubmit}>
              Buy Me a Coffee!
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

interface DonateProps {}

export default Donate;
