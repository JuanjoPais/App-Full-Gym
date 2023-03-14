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
						<Nav.Link href="#features" className="queEs">
							Qué es GymBro App?
						</Nav.Link>
					</Nav>
					<Nav>
						<div className="links">
							<Nav.Link>
								<FaInstagram />
							</Nav.Link>

							<Nav.Link>
								<FaWhatsapp />
							</Nav.Link>
							<Nav.Link>
								<FaTiktok />
							</Nav.Link>
						</div>

						<Nav.Link>
							<Button variant="dark">Registrate</Button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;
