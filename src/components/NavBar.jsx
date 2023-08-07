import { NavLink } from 'react-router-dom';
import '../css/navbar.css'

export const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 fs-2">
        <div className="container-fluid">
          <NavLink className="navbar-brand me-2 navbar-text fs-2" to="/">
            <img src="/spatula.svg" alt="Logo" width="80" height="74" className="d-inline-block" />
            SAN PEDRO
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <NavLink className="nav-link inactive-link" to="/" activeClassName="">
                  <i className="fa-solid fa-house"></i> Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/nosotros">
                  <i className="fa-solid fa-users"></i> Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reservas">
                  <i className="fa-solid fa-file-signature"></i> Reservas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacto">
                  <i className="fa-solid fa-envelope-circle-check"></i> Contáctanos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
