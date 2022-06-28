import React from "react";
import { useState, useEffect } from "react";
import { chirpsWithUser } from "../types";
import ChirpCard from "../components/ChirpCard";

const Timeline = () => {

const [chirps, setChirps] = useState<chirpsWithUser[]>([]);

useEffect(() => {
  (async () => {
    const res = await fetch("/api/chirps");
    const allChirps = await res.json();
    console.log(allChirps);
    setChirps(allChirps);
  })();
}, []);


return(
    <main className="container">
    <h3 className="text-light text-start">
            Chirper
            </h3>
    <section className="row mt-5 justify-content-center">
      <section className="col-md-6">
      </section>
    </section>
    <section className="row justify-content-center">
      <h1 className="text-light text-center">Timeline</h1>
      <section className="col-md-6 justify-content-center">
        {chirps.map((chirp) => (
         <ChirpCard chirp={chirp} key={`user-card-${chirp.id}`}/>
        ))}
      </section>
    </section>
  </main>
)

}

export default Timeline;