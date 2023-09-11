import React from 'react';
import { Link } from 'react-router-dom';



function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container px-5">
				<a className="navbar-brand" href="#!">DiabeticLink
				</a>
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
							<Link className="nav-link active" aria-current="page" to="/quienessomos">Quiénes Somos</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/foro">Foro
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/cambioregalo">Te lo Cambio/Regalo</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/registro">Registro</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/login">Login</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;


