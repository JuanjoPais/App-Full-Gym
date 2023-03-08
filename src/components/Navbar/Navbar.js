import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./Navbar.css";
import {NavbarBrand} from "react-bootstrap";

function NavigationBar() {
	return (
		<Navbar expand="lg" className="navbar">
			<Container>
				<div className="containerNavbar">
					<NavbarBrand className="logo">Nuestro Logo</NavbarBrand>

					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto links">
							<Nav.Link className="btnQueEs">Qué es AppFullGym?</Nav.Link>

							<Nav.Link className="red">Redes</Nav.Link>
							<Nav.Link className="red">Redes</Nav.Link>

							<Nav.Link>
								<Button variant="dark" className="btnRegistro">
									Registrate
								</Button>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;
