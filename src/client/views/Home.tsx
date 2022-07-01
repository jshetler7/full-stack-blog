import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return(
        <main className="container">
            <Link to={'/'}>
            <h3 className="text-light text-start">
            Blog
            </h3>
            </Link>
            <section className="row justify-content-start">
                <div className="card col-md-10 mt-5 bg-dark shadow-lg border border-primary">
                    <div className="card-title text-light text-center">
                        <h1>Welcome to a shitty blog website!</h1>
                        <div className="card-body text-light">
                            <p>This is a blog app. Why are you here?</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;