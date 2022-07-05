import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
const stripe = loadStripe('pk_test_51LGmedHizKJlQrpCm8LESMScdpJjfZ6qrJdbCKdcOeYQRlKYzQKwYSLitYiwUA3hCvm21m3rJ1Fh8CGzL86pnoJH00DKieoPh5');


import Home from "./views/Home";
import Collection from "./views/Collection";
import Compose from "./views/Compose";
import CollectionSpec from './views/CollectionSpec';
import Navbar from "./components/Navbar";
import EditBlog from "./views/EditBlog";
import AuthorSpec from "./views/AuthorSpec";
import Donate from "./views/Donate"
import Contact from "./views/Contact";


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
      <Route path="/donate" element={
        <Elements stripe={stripe}>
          <Donate />
        </Elements>
        } />
      <Route path='/contact' element={<Contact />} />
      
      </Routes>
      </BrowserRouter>
  )
};

export default App;
