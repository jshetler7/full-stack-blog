import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Timeline from "./views/Timeline";
import Compose from "./views/Compose";
import TimelineSpec from './views/TimelineSpec';
import UserSpec from "./views/UserSpec";
import Navbar from "./components/Navbar";
import EditChirp from "./views/EditChirp";


const App = () => {
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/timeline" element={<Timeline />} />
    <Route path="/timeline/:id" element={<TimelineSpec />} />
    <Route path="/timeline/users/:id" element={<UserSpec />} />
    <Route path="/timeline/:id/edit" element={<EditChirp />} />
    <Route path="/compose" element={<Compose />} />
    </Routes>
    </BrowserRouter>
  )
};

export default App;
