import React from "react";
import { useState, useEffect } from "react";
import { Users } from "../types";
import { useNavigate } from "react-router-dom";

const Compose = () => {

    const nav = useNavigate();
    const [users, setUsers] = useState<Users[]>([]);
    const [content, setContent] = useState<string>('');
    const [selectedUser, setSelectedUser] = useState<number>(0);

    useEffect(() => {
        fetch('/api/users')
        .then(res => res.json())
        .then((data: Users[]) => {
            setUsers(data);
        })
        .catch(e => console.error(e));
      }, []);

      const handleSubmitChirp = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(!selectedUser) return;
        fetch("/api/chirps", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ content, userid: selectedUser})
        })
        .then(res => res.json())
        .then(data => {
            nav(`/timeline/${data.id}`);
        })
        .catch(e => console.error(e));
      };

    return(
        <main className="container">
            <h3 className="text-light text-start">
            Chirper
            </h3>
            <section className="row justify-content-center mt-5">
                <div className= 'card col-md-6 bg-dark border border-1 border-light-50 m-1 shadow-lg'>
                    <div className= 'card-body'>
                        <form>
                        <div className="row mb-1">
                            <div className="col-2">
                                <img src="https://picsum.photos/50/50" className="rounded-circle"/>
                            </div>
                            <div className="col-10 d-flex justify-content-between align-items-end">
                                <div className="card-title text-light">
                                        <select className="form-select" value={selectedUser} onChange={e => setSelectedUser(Number(e.target.value))} >
                                            <option value="0">Select a User!</option>
                                                {users.map(user => (<option key={`user-option-${user.id}`} value={user.id}>{user.name}</option>))}
                                        </select>                           
                                </div>
                            </div>
                        </div>
                            <div className="row g-3">
                                <div className="col-12 text-start input-group">
                                    <textarea 
                                    value={content} 
                                    className="form-control bg-dark text-light border-0" 
                                    placeholder="What's happening?"
                                    onChange={e => setContent(e.target.value)}
                                    />
                                </div>
                                <div className="mt-3 d-flex justify-content-end">
                                    <button 
                                    className="btn btn-outline-light" 
                                    onClick={handleSubmitChirp}>
                                        Chirp
                                    </button>
                                </div>
                            </div>    
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Compose;