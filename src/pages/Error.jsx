import React from "react";
import "../style/Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section_error">
      <h7>404</h7>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="homeLink">
        Retourner sur le page d'accueil
      </Link>
    </section>
  );
};

export default Error;
