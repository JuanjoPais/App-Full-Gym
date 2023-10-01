import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./Navbar.css";
import {FaInstagram, FaWhatsapp, FaTiktok} from "react-icons/fa";
import {CgGym} from "react-icons/cg";

function NavigationBar() {
	return (
		<Navbar 
			collapseOnSelect
			expand="lg"
			bg="dark"
			variant="dark"
			className="navBar"
		>
			<Container>
			
				<Navbar.Brand>
					<CgGym className="logo" />
				</Navbar.Brand>
			
				<Navbar.Toggle aria-controls="responsive-navbar-nav" className="tog" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#features" className="palabras">
							HOME
						</Nav.Link>
						<Nav.Link href="#features" className="palabras">
							Clases
						</Nav.Link>
						<Nav.Link href="#features" className="palabras">
							Zonas
						</Nav.Link>
						<Nav.Link href="#features" className="palabras">
							Servicios
						</Nav.Link>
						<Nav.Link href="#features" className="palabras">
							Nosotros
						</Nav.Link>
						<Nav.Link href="#features" className="palabras">
							Contacto
						</Nav.Link>
					</Nav>
					<Nav>
						<div className="links">
							<Nav.Link>
								<FaInstagram />
							</Nav.Link>

							<a
								href="https://wa.me/5491165188743?text=Hola,%20estoy%20interesado%20en%20su%20servicio
										"
								target="_blank"
								rel="noopener noreferrer"
								className="wasapNav"
							>
								<FaWhatsapp />
							</a>

							<Nav.Link>
								<FaTiktok />
							</Nav.Link>
						</div>
{/**
						<Nav.Link>
							<Button variant="dark">Registrate</Button>
						</Nav.Link>
					*/}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;
