import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../store/AppContext";

function NavBar() {
  // Se trae el store y las actions usando el Context
  const { store, actions } = useContext(Context);
  const { user } = store;
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-5">
        {/* Se cambia etiqueta <a> por <link> y se redirecciona al Home */}
        <Link className="navbar-brand" to="/">
          DiabeticLink
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/quienessomos"
              >
                Quiénes Somos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/foro">
                Foro
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cambioregalo">
                Te lo Cambio/Regalo
              </Link>
            </li>
            <li className="nav-item">
              {/* Se renderiza condicionalmente boton de login, si el usuario tiene datos, se renderiza boton de logout */}
              {user === null ? (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              ) : (
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => actions.logout(navigate)}
                >
                  Logout
                </Link>
              )}
            </li>
            {user !== null && (
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
            )}
            {user === null && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Registro
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/registropersona">
                      Registro Usuario
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/registrocomercio">
                      Registro Comercio
                    </Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
