import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiService } from "../services/apiService";

const Contact = () => {
  const [from, setFrom] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const nav = useNavigate();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    apiService('/api/contact', 'POST', { from, subject, message })
    .then(result => {
      console.log(result);
      nav('/');
    })
    .catch(err => console.log(err));
  //   fetch("/api/contact", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ from, subject, message }),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       nav('/');
  // })
  };

  return (
    <main className="container my-5">
      <section className="row justify-content-center">
        <h1 className="text-light text-center">Contact Me!</h1>
        <div className="col-md-6">
          <form className="form-group p-3 border border-light shadow-lg">
            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="form-control mb-1"
              type="text"
              placeholder="email"
            />
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="form-control mb-1"
              type="text"
              placeholder="Subject"
            />
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control mb-1"
              type="text"
              placeholder="Whatcha wanna say?"
            />
            <div className="justify-content-center">
                <button className="btn btn-outline-light mt-2" onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
