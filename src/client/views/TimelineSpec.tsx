import React from "react";
import { useState, useEffect } from "react";
import { chirpsWithUser } from "../types";
import { useParams, Link } from 'react-router-dom';
import ChirpCard from "../components/ChirpCard";

const TimelineSpec = () => {

  const [chirp, setChirp] = useState<chirpsWithUser>();
  const { id } = useParams();

  useEffect(() => {
    fetch("/api/chirps/"+id)
    .then(res => res.json())
    .then(data => setChirp(data))
    .catch(err => console.error(err));
  }, []);


  return(
      <main className="container">
      <h3 className="text-light text-start">
        Chirper
      </h3>
      <section className="row mt-5 justify-content-center"></section>
      <section className="row justify-content-center">
        <h1 className="text-light text-center">Timeline</h1>
        <section className="col-md-6 justify-content-center">
          {chirp &&  <ChirpCard chirp={chirp} />}
        </section>
        <div className="row justify-content-center">
          {chirp && <Link to={`/timeline/${chirp.id}/edit`} className="btn btn-primary col-2 mt-3">Edit Chirp</Link>}
        </div>
      </section>
    </main>
  )

}

export default TimelineSpec;