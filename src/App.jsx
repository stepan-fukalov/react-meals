import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";
import { Category } from "./pages/category";
import { Recipe } from "./pages/recipe";

import "./styles.css";

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h1>Oops!</h1>
      <h3>Sorry, an unexpected error has occurred.</h3>
      <h5>Does not exist: {location.pathname}</h5>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter basename="/spa-project">
      <Header />
      <main className="container content">
        <Routes>
          <Route path="*" element={<NoMatch />}></Route>
          <Route path="/" element={<Home />} />
          <Route path="contact/" element={<Contact />} />
          <Route path="about/" element={<About />} />
          <Route path="category/:name" element={<Category />} />
          <Route path="meal/:id" element={<Recipe />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
