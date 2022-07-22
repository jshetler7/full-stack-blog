import React from "react";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {

    const nav = useNavigate();

    const [active, setActive] = useState(true);

    const menuExpand = (e: React.MouseEvent<HTMLInputElement>) => {
        setActive(!active);        
    };

    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
      localStorage.setItem('token', '');
      nav('/login');
    }

  return (
    <div className={`vertical-nav col-12 col-md-6 ${active === true && "active"}`} id="sidebar">
      <div className="py-4 px-3 mb-4">
        <input
        className={`${active === true && "active"}`}
          type="image"
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6I3VuZGVmaW5lZDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTIxLjUsMzUuODMzMzNjLTIuNTg0NTYsLTAuMDM2NTUgLTQuOTg4NTgsMS4zMjEzNiAtNi4yOTE1MywzLjU1Mzc2Yy0xLjMwMjk1LDIuMjMyNCAtMS4zMDI5NSw0Ljk5MzQyIDAsNy4yMjU4MmMxLjMwMjk1LDIuMjMyNCAzLjcwNjk3LDMuNTkwMzEgNi4yOTE1MywzLjU1Mzc2aDEyOWMyLjU4NDU2LDAuMDM2NTUgNC45ODg1OCwtMS4zMjEzNiA2LjI5MTUzLC0zLjU1Mzc2YzEuMzAyOTUsLTIuMjMyNCAxLjMwMjk1LC00Ljk5MzQyIDAsLTcuMjI1ODJjLTEuMzAyOTUsLTIuMjMyNCAtMy43MDY5NywtMy41OTAzMSAtNi4yOTE1MywtMy41NTM3NnpNMjEuNSw3OC44MzMzM2MtMi41ODQ1NiwtMC4wMzY1NSAtNC45ODg1OCwxLjMyMTM2IC02LjI5MTUzLDMuNTUzNzZjLTEuMzAyOTUsMi4yMzI0IC0xLjMwMjk1LDQuOTkzNDIgMCw3LjIyNTgyYzEuMzAyOTUsMi4yMzI0IDMuNzA2OTcsMy41OTAzMSA2LjI5MTUzLDMuNTUzNzZoMTI5YzIuNTg0NTYsMC4wMzY1NSA0Ljk4ODU4LC0xLjMyMTM2IDYuMjkxNTMsLTMuNTUzNzZjMS4zMDI5NSwtMi4yMzI0IDEuMzAyOTUsLTQuOTkzNDIgMCwtNy4yMjU4MmMtMS4zMDI5NSwtMi4yMzI0IC0zLjcwNjk3LC0zLjU5MDMxIC02LjI5MTUzLC0zLjU1Mzc2ek0yMS41LDEyMS44MzMzM2MtMi41ODQ1NiwtMC4wMzY1NSAtNC45ODg1OCwxLjMyMTM2IC02LjI5MTUzLDMuNTUzNzZjLTEuMzAyOTUsMi4yMzI0IC0xLjMwMjk1LDQuOTkzNDIgMCw3LjIyNTgyYzEuMzAyOTUsMi4yMzI0IDMuNzA2OTcsMy41OTAzMSA2LjI5MTUzLDMuNTUzNzZoMTI5YzIuNTg0NTYsMC4wMzY1NSA0Ljk4ODU4LC0xLjMyMTM2IDYuMjkxNTMsLTMuNTUzNzZjMS4zMDI5NSwtMi4yMzI0IDEuMzAyOTUsLTQuOTkzNDIgMCwtNy4yMjU4MmMtMS4zMDI5NSwtMi4yMzI0IC0zLjcwNjk3LC0zLjU5MDMxIC02LjI5MTUzLC0zLjU1Mzc2eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
          id="sidebarCollapse"
          onClick={menuExpand}
        />
      </div>

      <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
        Main
      </p>

      <ul className="nav flex-column mb-0">
        <li className="nav-item">
          <Link to={"/"} className="nav-link text-light font-italic">
            <i className="fa fa-th-large mr-3 text-light fa-fw"></i>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/collection"} className="nav-link text-light font-italic">
            <i className="fa fa-address-card mr-3 text-light fa-fw"></i>
            Collection
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/compose"} className="nav-link text-light font-italic">
            <i className="fa fa-cubes mr-3 text-light fa-fw"></i>
            Compose
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/donate"} className="nav-link text-light font-italic">
            <i className="fa fa-cubes mr-3 text-light fa-fw"></i>
            Donate
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"} className="nav-link text-light font-italic">
            <i className="fa fa-cubes mr-3 text-light fa-fw"></i>
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <button className="btn btn-light" onClick={handleLogout}>
            <i className="fa fa-cubes mr-3 fa-fw"></i>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
