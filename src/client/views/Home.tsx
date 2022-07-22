import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <main className="container">
      <Link to={"/"}>
        <h3 className="text-light text-start">Bloggr</h3>
      </Link>
      
      <section className="row justify-content-start">
        <div className="card col-md-10 mt-5 bg-light shadow-lg border border-primary">
          <div className="card-title text-dark text-center mt-3">
            <h1>Welcome to a blog website!</h1>
            <div className="card-body text-dark">
              <p>This is a blog app. Why are you here? Make an account or login and tell us!</p>
              <Link 
              to={'/login'}
              className="btn btn-outline-success col-2 me-2"
              >
                Login
              </Link>
              <Link 
              to={'/register'}
              className="btn btn-outline-primary col-2"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
