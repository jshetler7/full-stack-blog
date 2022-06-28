import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { chirpsWithUser, Users } from "../types";

const EditPost = () => {
  const [chirp, setChirp] = useState<chirpsWithUser>();
  const [user, setUser] = useState<Users[]>([]);
  const [content, setContent] = useState<string>("");
  const [userid, setUserId] = useState<number>(0);

  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((e) => console.error(e));

    fetch(`/api/chirps/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setChirp(data);
        setUserId(data.userid);
        setContent(data.content);
      })
      .catch((e) => console.error(e));
  }, []);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!confirm("Are you SURE you want to delete this chirp?")) return;

    fetch(`/api/chirps/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        nav("/timeline");
      })
      .catch((e) => console.error(e));
  };

  const handleSaveUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if(!userid) return alert('Fill out the user selector!');
    if(!content) return alert('Fill out the chirp content!!');

    fetch(`/api/chirps/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userid, content })
    })
    .then(res => res.json())
    .then(data => {
        nav(`/timeline/${id}`);
    })
    .catch(e => console.error(e));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h3 className="text-muted">Editing chirp #{id}</h3>
        <section className="row justify-content-center mt-5">
          <div className="card col-md-6 bg-dark border border-1 border-light-50 m-1 shadow-lg">
            <div className="card-body">
              <form>
                <div className="row mb-1 justify-content-center">
                  <div className="col-2">
                    <img
                      src="https://picsum.photos/50/50"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="col-10 d-flex justify-content-between align-items-end">
                    <div className="card-title text-light">
                      <select
                        className="form-select"
                        value={userid}
                        onChange={(e) => setUserId(Number(e.target.value))}
                      >
                        <option value="0">Select a User!</option>
                        {user.map((users) => (
                          <option
                            key={`user-option-${users.id}`}
                            value={users.id}
                          >
                            {users.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col text-start input-group">
                    <textarea
                      value={content}
                      className="form-control col-12 col-md-6 bg-dark text-light border-0"
                      placeholder="What's happening?"
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                  <div className="mt-3 d-flex justify-content-center">
                    <button
                      className="btn btn-outline-danger"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
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
    </div>
  );
};

export default EditPost;
