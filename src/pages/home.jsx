import React from "react";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <h1>Bienvenue sur mon site </h1>
        <p>Ceci est la page d'accueil</p>

        <button>
          Découvrir
        </button>
      </main>

      <Footer />
    </>
  );
}

export default Home;