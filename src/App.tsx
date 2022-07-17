import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import ComingSoon from "./pages/ComingSoon";
import FavoriteMovies from "./pages/FavoriteMovies";
import Navbar from "./component/Navbar";
import { MoviesProvider } from "./context/MoviesContext";

function App() {
  return (
    <MoviesProvider>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/coming-soon" element={<ComingSoon />}></Route>
          <Route path="/favorite-movies" element={<FavoriteMovies />}></Route>
        </Routes>
      </Container>
    </MoviesProvider>
  );
}

export default App;
