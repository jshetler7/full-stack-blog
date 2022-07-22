import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BlogsWithAuthor, Authors, Hashtags } from "../types";
import { v4 as uuidv4 } from 'uuid';
import { apiService } from "../services/apiService";

const EditPost = () => {
  const [blogs, setBlogs] = useState<BlogsWithAuthor>();
  const [authors, setAuthors] = useState<Authors[]>([]);
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [authorid, setAuthorId] = useState<number>(0);
  const [tags, setTags] = useState<Hashtags[]>([]);
  const [selectedTag, setSelectedTag] = useState<number>(0);

  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    apiService('/api/authors', 'GET', setAuthors)
    .catch(err => console.error(err));

    apiService(`/api/blogs/${id}`)
    .then((data) => {
        setBlogs(data);
        setAuthorId(data.authorid);
        setContent(data.content);
        setTitle(data.title);
    })
    .catch(err => console.error(err));

    apiService('/api/tags', 'GET', setTags)
    .catch(err => console.error(err));
    // fetch("/api/authors")
    //   .then((res) => res.json())
    //   .then((data) => setAuthors(data))
    //   .catch((e) => console.error(e));

    // fetch(`/api/blogs/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBlogs(data);
    //     setAuthorId(data.authorid);
    //     setContent(data.content);
    //     setTitle(data.title);
    //   })
    //   .catch((e) => console.error(e));

    // fetch("/api/tags")
    //   .then((res) => res.json())
    //   .then(data => setTags(data))
    //   .catch(e => console.error(e));
  }, []);

  const handleSaveUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!authorid) return alert('Fill out the author selector!');
    if (!content) return alert('Fill out the blog content!!');

    apiService(`/api/blogs/${id}`, 'PUT', { authorid, content})
    .then(data => nav(`/collection/${id}`))
    .catch(err => console.error(err));
    // fetch(`/api/blogs/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ authorid, content })
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     nav(`/collection/${id}`);
    //   })
    //   .catch(e => console.error(e));
  };

  return (
    <div className="container">
      <h3 className="text-light text-start">Bloggr</h3>
      <section className="row justify-content-center mt-5">
        <div className="card col-12 col-md-10 shadow-lg">
          <div className="card-body">
            <form>
              <div className="row mb-1">
                <div className="col-10 d-flex justify-content-between align-items-end">
                  <div className="card-title text-light">
                    <select
                      className="form-select"
                      value={authorid}
                      onChange={(e) => setAuthorId(Number(e.target.value))}
                    >
                      <option value="0">Select an Author!</option>
                      {authors.map((author) => (
                        <option
                          key={`authors-option-${author.id}`}
                          value={author.id}
                        >
                          {author.name}
                        </option>
                      ))}
                    </select>
                    <select
                      className="form-select"
                      value={selectedTag}
                      onChange={(e) => setSelectedTag(Number(e.target.value))}
                    >
                      <option value={0} >Select A Tag!</option>
                      {tags.map((tag) => (
                        <option key={uuidv4()} value={tag.id}>
                          {tag.tagname}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row g-3">
                <div className="col-12 text-start input-group">
                  <input
                    value={title}
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="col text-start input-group">
                  <textarea
                    value={content}
                    rows={20}
                    className="form-control border-0"
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <div className="mt-3 d-flex justify-content-center">
                  <button
                    className="btn btn-outline-success"
                    onClick={handleSaveUpdate}>
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditPost;
