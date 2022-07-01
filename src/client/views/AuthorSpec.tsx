import React from "react";
import { useState, useEffect } from "react";
import { BlogsWithAuthor } from "../types";
import { useParams } from 'react-router-dom';
import BlogCard from "../components/BlogCard";

const AuthorSpec = () => {

    const [blogs, setBlogs] = useState<BlogsWithAuthor[]>([]);
    const { id } = useParams();

    useEffect(() => {
      fetch("/api/blogs/authors/"+id)
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error(err));
    }, []);

    return(
        <main className="container">
            <h3 className="text-light text-start">
            Blog
            </h3>

            <div className="row justify-content-center mt-2">
                <div className="card col-12 col-md-10 justify-content-center">
                  <div className="card-title text-center">
                    <h3>{blogs[0]?.name}</h3>
                    <div className="card-subtitle">
                      <h5>{blogs[0]?.email}</h5>
                    <div className="card-body">
                    </div>
                  </div>
                  </div>
                </div>
            </div>
          <section className="row row-cols-1 row-cols-md-3 g-4 mt-5">
            {blogs.map((blog) => (
                <BlogCard blog={blog} key={`user-card-${blog.id}`}/>
            ))}
          </section>
      </main>
    );
};

export default AuthorSpec;


