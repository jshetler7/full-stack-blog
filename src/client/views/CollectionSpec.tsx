import React from "react";
import { useState, useEffect } from "react";
import { BlogsWithAuthor, Hashtags } from "../types";
import { useParams, Link } from "react-router-dom";
import moment from "moment";
import { apiService } from "../services/apiService";

const CollectionSpec = () => {
  const [blog, setBlog] = useState<BlogsWithAuthor>();
  const [tags, setTags] = useState<Hashtags[]>([]);
  const { id } = useParams();

  useEffect(() => {
    apiService('/api/blogs/' + id)
    .then(data => setBlog(data))
    .catch(err => console.log(err));
    // fetch("/api/blogs/" + id)
    //   .then((res) => res.json())
    //   .then((data) => setBlog(data))
    //   .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    apiService('/api/blogs/procedure/' + id)
    .then(data => setTags(data[0]))
    .catch(err => console.log(err));
    // fetch("/api/blogs/procedure/" + id)
    //   .then((res) => res.json())
    //   .then((data) => setTags(data[0]))
    //   .catch((err) => console.error(err));
  }, []);

  return (
    <main className="container">
      <h3 className="text-start text-light">Bloggr</h3>
      <section className="row mt-5 justify-content-center">
        <div className="card col-12 col-md-8 shadow-lg">
          <div className="card-body">
            <div className="card-title text-center">{blog?.title}</div>
            <Link to={`/collection/authors/${blog?.authorid}`} style={{ textDecoration: "none" }}>
            <div className="card-subtitle mt-1 text-start">
              By: {blog?.name}
            </div>
            <div className="card-subtitle text-start">
              Published: {moment(blog?._created).format(`MMM DD YYYY`)}
            </div>
            <div className="card-subtitle text-start">
              Last Updated: {moment(blog?._updated).format(`MMM DD YYYY`)}
            </div>
            </Link>
            <div className="card-text mt-3">{blog?.content}</div>
            <div className="card-footer mt-5">
              Tags:
              {tags.map((tag) => (
                <button
                  key={`tag-option-${tag.id}`}
                  className="btn btn-small bg-success text-light ms-1"
                >
                  {tag.tagname}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CollectionSpec;
