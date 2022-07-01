import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Collection from "./views/Collection";
import Compose from "./views/Compose";
import CollectionSpec from './views/CollectionSpec';
import Navbar from "./components/Navbar";
import EditBlog from "./views/EditBlog";
import AuthorSpec from "./views/AuthorSpec";


const App = () => {
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/collection" element={<Collection />} />
    <Route path="/collection/:id" element={<CollectionSpec />} />
    <Route path="/collection/authors/:id" element={<AuthorSpec />} />
    <Route path="/collection/:id/edit" element={<EditBlog />} />
    <Route path="/compose" element={<Compose />} />
    </Routes>
    </BrowserRouter>
  )
};

export default App;
