import React from "react";
import { BlogsWithAuthor } from "../types";
import { Link } from "react-router-dom";
import * as moment from "moment";

const BlogCard = (props: { blog: BlogsWithAuthor }) => {
  const { blog } = props;

  return (
    <div className="col">
      <div className="card shadow-lg">
        <img
          className="card-img-top"
          src="https://picsum.photos/seed/picsum/350/150"
          alt="card image cap"
        />
        <div className="card-body">
            <div className="row">
              <h5 className="card-title" style={{minHeight: '50px'}}>{blog.title}</h5>
            </div>
          <Link to={`/collection/${blog.id}`} style={{ textDecoration: "none" }}>
          <div className="row">
            <div className="col text-start">
              <p className="card-text">{blog.content.substring(0, 100)}...</p>
            </div>
          </div>
          </Link>
          <div className="card-footer align-bottom">
            <p className="text-start">{moment(blog._created).fromNow()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
