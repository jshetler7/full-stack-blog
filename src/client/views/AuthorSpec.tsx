import React from "react";
import { useState, useEffect } from "react";
import { BlogsWithAuthor } from "../types";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { apiService } from "../services/apiService";
import moment from "moment";

const AuthorSpec = () => {

    const [blogs, setBlogs] = useState<BlogsWithAuthor[]>([]);
    const { id } = useParams();
    const nav = useNavigate();

    useEffect(() => {
      apiService('/api/blogs/authors/id')
      .then(data => setBlogs(data))
      .catch(err => {
        console.error(err);
        nav('/login');
      });
    }, []);
//@ts-ignore
    const handleDelete = deleteId => {  
      if (!confirm("Are you SURE you want to delete this blog?")) return;
  
      apiService(`/api/blogs/${deleteId}`, 'DELETE')
      .then(() => {
        const updatedList = blogs.filter(blog => blog.id !== deleteId);
        setBlogs(updatedList);
      })
      .catch(err => console.error(err));
    };

    const handleRedirect = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      nav(`/collection/${blogs[0].id}/edit`)
    }
  

    return(
        <main className="container">
            <h3 className="text-light text-start">
            Bloggr
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
          {/* <section className="row row-cols-1 row-cols-md-3 g-4 mt-5"> */}
          <section className="row mt-5 justify-content-center">
            {blogs.map((blog) => (
              <div className="list-group col-12 mt-2 bg-light" key={`user-blogs-${blog.id}`}>
                <div className="list-group-item">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{blog.title}</h5>
                  </div>
                  <p className="mb-1">{moment(blog._created).format(`MMM DD YYYY`)}</p>
                  <button
                    className="btn btn-outline-danger col-2 me-1"
                    onClick={() => handleDelete(blog.id)}
                  >
                    Delete
                  </button>
                <button
                  className="btn btn-outline-primary col-2"
                  onClick={handleRedirect}
                >
                  Edit
                </button>
                </div>
              </div>
                // <BlogCard blog={blog} key={`user-card-${blog.id}`}/>
            ))}
          </section>
      </main>
    );
};

export default AuthorSpec;


