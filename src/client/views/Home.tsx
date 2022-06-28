import React from "react";

const Home = () => {

    return(
        <main className="container">
            <h3 className="text-light text-start">
            Chirper
            </h3>
            <section className="row justify-content-start">
                <div className="card col-md-10 mt-5 bg-dark shadow-lg border border-primary">
                    <div className="card-title text-light text-center">
                        <h1>Welcome to Chirper, the Twitter from Wish!</h1>
                        <div className="card-body text-light">
                            <p>If you're using this instead of Twitter, you're either a misled hipster, 
                                a masochist, or one of my instructors! In any case, welcome to the first 
                                of the nine levels of hell! Please enjoy your stay! Forever...</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;