import React from "react";
import "../style/Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section_error">
      <h6 className="error404">404</h6>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="homeLink">
        Retourner sur le page d'accueil
      </Link>
    </section>
  );
};

export default Error;
