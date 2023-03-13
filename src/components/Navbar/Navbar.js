// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Button from "react-bootstrap/Button";
// import "./Navbar.css";
// import {NavbarBrand} from "react-bootstrap";

// function NavigationBar() {
// 	return (
// 		<Navbar expand="lg" className="navbar">
// 			<Container>
// 				<div className="containerNavbar">
// 					<NavbarBrand className="logo">Nuestro Logo</NavbarBrand>

// 					<Navbar.Toggle aria-controls="basic-navbar-nav" />
// 					<Navbar.Collapse id="basic-navbar-nav">
// 						<Nav className="me-auto links">
// 							<Nav.Link className="btnQueEs">Qué es AppFullGym?</Nav.Link>

// 							<Nav.Link className="red">Redes</Nav.Link>
// 							<Nav.Link className="red">Redes</Nav.Link>

// 							<Nav.Link>
// 								<Button variant="dark" className="btnRegistro">
// 									Registrate
// 								</Button>
// 							</Nav.Link>
// 						</Nav>
// 					</Navbar.Collapse>
// 				</div>
// 			</Container>
// 		</Navbar>
// 	);
// }

// export default NavigationBar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./Navbar.css";

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
				<Navbar.Brand>Logo</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#features" className="links">
							Qué es GymBro App?
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link className="links">Redes</Nav.Link>
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
