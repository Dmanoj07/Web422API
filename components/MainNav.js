import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown'; // Add this import statement
import { useRouter } from 'next/router';
import { useAtom } from 'jotai'; // Import the useAtom hook

import { searchHistoryAtom } from '../store';


export default function MainNav() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  // Get the searchHistory and setSearchHistory from the searchHistoryAtom
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsExpanded(false); // Close the navbar when form is submitted
    const queryString = `/artwork?title=true&q=${searchText}`;
    // Store the queryString as an object
    const searchEntry = {
      title: true,
      q: searchText,
    };
    router.push(queryString);
     // Add the computed queryString to the searchHistory
    setSearchHistory((current) => [...current, searchEntry]);
  };

  const handleNavbarToggle = () => {
    setIsExpanded(!isExpanded); // Toggle the isExpanded state when the Navbar.Toggle is clicked
  };

  const handleNavLinkClick = () => {
    setIsExpanded(false); // Close the navbar when a Nav.Link is clicked
  };


  console.log('Current path:', router.pathname);

  return (
    <>
      <Navbar className="fixed-top navbar-dark bg-dark" expanded={isExpanded}>
        <Container>
          <Navbar.Brand className="text-light">Manoj Dhami</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavbarToggle} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior><Nav.Link active={router.pathname === "/"} className="text-light" onClick={handleNavLinkClick}>Movies</Nav.Link></Link>
              <Link href="/search" passHref legacyBehavior><Nav.Link active={router.pathname === "/search"} className="text-success" onClick={handleNavLinkClick}>Advanced Search</Nav.Link></Link>
            </Nav>

            {/*  controlled Component */}
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={(e) => setSearchText(e.target.value)} />
              <Button type='submit' variant="outline-success" className="btn btn-success text-light" >Search</Button>
            </Form>

            {/* User Name Dropdown */}
            <Nav>
              <NavDropdown title="User Name" id="user-name-dropdown">
                <Link href="/favourites" passHref legacyBehavior>
                  <NavDropdown.Item onClick={handleNavLinkClick} active={router.pathname === "/favourites"} >Favourites</NavDropdown.Item>
                </Link>
                <Link href="/history" passHref legacyBehavior>
                  <NavDropdown.Item onClick={handleNavLinkClick} active={router.pathname === "/history"} >Search History</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br /><br />
    </>
  );
}
