import React from "react";
import { useState, useEffect } from "react";
import { Authors, Hashtags } from "../types";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { apiService } from "../services/apiService";

const Compose = () => {
  const nav = useNavigate();
  const [authors, setAuthors] = useState<Authors[]>([]);
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [selectedAuthor, setSelectedAuthor] = useState<string>('');
  const [tags, setTags] = useState<Hashtags[]>([]);
  const [selectedTag, setSelectedTag] = useState<number>(0);

  // useEffect(() => {
  //   apiService('/api/authors')
  //   // fetch("/api/authors")
  //   //   .then((res) => res.json())
  //     .then((data: Authors[]) => {
  //       setAuthors(data);
  //     })
  //     .catch((e) => console.error(e));
  // }, []);

  useEffect(() => {
    apiService('/api/tags')
    // fetch("/api/tags")
    //   .then((res) => res.json())
      .then((data) => setTags(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmitBlog = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    apiService('/api/blogs', 'POST', { title, content})
    .then((data) => {
      const blogid = data.id;
      apiService('/api/blogtags', 'POST', { blogid, tagid: selectedTag })
      nav(`/collection/${data.id}`);
    })
    .catch(err => console.log(err));

    // fetch("/api/blogs", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ title, content, authorid: selectedAuthor }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const blogid = data.id;
    //     fetch("/api/blogtags", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ blogid, tagid: selectedTag }),
    //     });
    //     nav(`/collection/${data.id}`);
    //   })
    //   .catch((e) => console.error(e));
  };

  return (
    <main className="container">
        <h3 className="text-light text-start">Bloggr</h3>
      <section className="row justify-content-center mt-5">
        <div className="card col-12 col-md-10 shadow-lg">
          <div className="card-body">
            <form>
              <div className="row mb-1">
                <div className="col-10 d-flex justify-content-between align-items-end">
                  <div className="card-title text-light">
                    {/* <select
                      className="form-select"
                      value={selectedAuthor}
                      onChange={(e) =>
                        setSelectedAuthor(e.target.value)
                      }
                    >
                      <option value=" ">Select an Author!</option>
                      {authors.map((author) => (
                        <option
                          key={`author-option-${author.id}`}
                          value={author.id}
                        >
                          {author.name}
                        </option>
                      ))}
                    </select> */}
                    <select
                      className="form-select"
                      value={selectedTag}
                      onChange={(e) => setSelectedTag(Number(e.target.value))}
                    >
                      <option value="0">Select A Tag!</option>
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
                    type="text"
                    value={title}
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                  />
                </div>
                <div className="col-12 text-start input-group">
                  <textarea
                    value={content}
                    className="form-control bg-light border-0"
                    rows={20}
                    placeholder="Start typing here!"
                    id="createBlogContent"
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                <div className="mt-3 d-flex justify-content-end">
                  <button
                    className="btn btn-outline-dark"
                    onClick={handleSubmitBlog}
                  >
                    Publish
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Compose;
