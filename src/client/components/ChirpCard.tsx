import React from "react";
import { chirpsWithUser } from "../types";
import { Link } from 'react-router-dom'
import * as moment from 'moment';

const ChirpCard = (props: {chirp: chirpsWithUser}) => {

    const { chirp } = props;

    return(
        <div className="card list-group bg-dark border-start-0 border-end-0 border-top border-bottom border-light-50 m-1  mt-5 shadow-lg">
            <div className="card-body pb-0">
            <Link to={`/timeline/users/${chirp.userid}`}style={{textDecoration: 'none'}} > 
              <div className="row mb-1">
                <div className="col-2">
                  <img
                    src="https://picsum.photos/50/50"
                    className="rounded-circle"
                  />
                </div>
                <div className="col-10 d-flex justify-content-between align-items-end">
                  <div className="card-title">
                    <h5 className="m-0 text-light">{chirp.name}</h5>
                  </div>
                </div>
              </div>
              </Link>
              <Link to={`/timeline/${chirp.id}`} style={{textDecoration: 'none'}}>
              <div className="row">
                <div className="col text-start">
                  <p className="card-text text-light my-2">{chirp.content}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-6 text-start">
                  <p className="card-footer text-light mb-0 mt-3">
                    {moment(chirp._created).fromNow()}
                  </p>
                </div>
              </div>
              </Link>
            </div>
          </div>
    );
};

export default ChirpCard;