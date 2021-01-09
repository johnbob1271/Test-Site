import React, { Component } from 'react'
import Nav from '@bit/react-bootstrap.react-bootstrap.nav'
import Button from '@bit/react-bootstrap.react-bootstrap.button'
import Form from '@bit/react-bootstrap.react-bootstrap.form'
import FormControl from '@bit/react-bootstrap.react-bootstrap.form-control'
import Navbar from '@bit/react-bootstrap.react-bootstrap.navbar'
// import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';

class Navigation extends Component {
	render() {
		return (
			<nav>
				<Navbar bg="dark" variant="dark" style={{ minWidth: 700 }}>
					<Navbar.Brand href="#home">Navbar</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Projects</Nav.Link>
						<Nav.Link href="#pricing">Blog</Nav.Link>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-info">Search</Button>
					</Form>
				</Navbar>
			</nav>
		)
	}
}

// export default () => (<div><ReactBootstrapStyle /><Navigation /></div>)
export default Navigation;