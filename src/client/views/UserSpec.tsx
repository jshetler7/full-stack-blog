import React from "react";
import { useState, useEffect } from "react";
import { chirpsWithUser } from "../types";
import { useParams } from 'react-router-dom';
import ChirpCard from "../components/ChirpCard";
import * as moment from 'moment';

const UserSpec = () => {

    const [chirps, setChirps] = useState<chirpsWithUser[]>([]);
    const { id } = useParams();

    useEffect(() => {
    fetch("/api/chirps/users/"+id)
    .then(res => res.json())
    .then(data => setChirps(data))
    .catch(err => console.error(err));
    }, []);

    return(
        <main className="container">
            <h3 className="text-light text-start">
            Chirper
            </h3>

            <div className="row justify-content-center">
                <div className="col-md-6 justify-content-center border border-bottom-0 border-light-50 pb-5 pt-1">
                <img
                src="https://picsum.photos/150/150"
                className="rounded-circle"
                />
                <h3 className="text-light ms-3">{chirps[0]?.name}</h3>
                <h5 className="text-muted ms-3">@{chirps[0]?.name}</h5>
                <h5 className="text-muted ms-3">Joined {moment(chirps[0]?._created).format('MMMM YYYY')}</h5>
                </div>
            </div>

        <section className="row justify-content-center">
          <section className="col-md-6 justify-content-center border border-light-50">
            {chirps.map((chirp) => (
                <ChirpCard chirp={chirp} key={`user-card-${chirp.id}`}/>
            ))}
          </section>
        </section>
      </main>
    );
};

export default UserSpec;