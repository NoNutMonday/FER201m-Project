
import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeToken } from "../../../../core/redux/auth";

function Header() {
	const location = useLocation();
	const mobileSidebarToggle = (e) => {
		e.preventDefault();
		document.documentElement.classList.toggle("nav-open");
		var node = document.createElement("div");
		node.id = "bodyClick";
		node.onclick = function () {
			this.parentElement.removeChild(this);
			document.documentElement.classList.toggle("nav-open");
		};
		document.body.appendChild(node);
	};

	const dispatch = useDispatch()

	
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
					<Button
						variant="dark"
						className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
						onClick={mobileSidebarToggle}
					>
						<i className="fas fa-ellipsis-v"></i>
					</Button>
				</div>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
					<span className="navbar-toggler-bar burger-lines"></span>
					<span className="navbar-toggler-bar burger-lines"></span>
					<span className="navbar-toggler-bar burger-lines"></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="nav mr-auto" navbar>
						<Nav.Item>
							<Nav.Link
								data-toggle="dropdown"
								href="/"
								onClick={(e) => e.preventDefault()}
								className="m-0"
							>
								<i className="nc-icon nc-palette"></i>
								<span className="d-lg-none ml-1">Dashboard</span>
							</Nav.Link>
						</Nav.Item>
					</Nav>
					<Nav className="ml-auto" navbar>
						
						<Dropdown as={Nav.Item}>
							<Dropdown.Toggle
								aria-expanded={true}
								aria-haspopup={true}
								as={Nav.Link}
								data-toggle="dropdown"
								id="navbarDropdownMenuLink"
								variant="default"
								className="m-0 "
							>
								<span className="no-icon">Account</span>
							</Dropdown.Toggle>
							<Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
								<Dropdown.Item
									onClick={() => dispatch(removeToken())}
								>
									Logout
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
