import React from "react";
import { useState, useEffect } from "react";
import { Blogs, BlogsWithAuthor } from "../types";
import BlogCard from "../components/BlogCard";
import { apiService } from "../services/apiService";

const Collection = () => {

const [blogs, setBlogs] = useState<BlogsWithAuthor[]>([]);

useEffect(() => {
  apiService('/api/blogs')
  .then(data => setBlogs(data))
  .catch(err => console.log(err));
  // (async () => {
  //   const res = await fetch("/api/blogs");
  //   const allBlogs = await res.json();
  //   setBlogs(allBlogs);
  // })();
}, []);


return(
    <main className="container">
    <h3 className="text-light text-start">
            Bloggr
            </h3>
    <section className="row mt-5 justify-content-center">
      <section className="col-md-6">
      </section>
    </section>
    <h1 className="text-light text-center">Collection</h1>
      <section className="row row-cols-1 row-cols-md-3 g-4">
        {blogs.map((blog) => (
         <BlogCard blog={blog} key={`author-card-${blog.id}`}/>
        ))}
      </section>
  </main>
)

}

export default Collection;