import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

import React from 'react'

const MobileMenu = ({ handleRegionChange }) => {
  const filters = [
    { label: 'All', region: '' },
    { label: 'Asia', region: 'Asia' },
    { label: 'Europe', region: 'Europe' }
    // Add more filters as needed
  ]

  return (
    <Navbar className="mt-4" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          Countries
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Regions" id="basic-nav-dropdown">
              {filters.map((filter, index) => (
                <NavDropdown.Item
                  key={index}
                  onClick={() => handleRegionChange(filter.region)}>
                  {filter.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MobileMenu
