import React from 'react';
import { Container, Navbar, Button, Nav, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaShieldAlt, FaSignOutAlt, FaUserCircle, FaUserShield } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

function NavBar() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const userRole = localStorage.getItem('userRole');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
    toast.success('Logged out successfully');
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="py-2 shadow-sm">
      <Container fluid>
        <Navbar.Brand className="d-flex align-items-center">
          <FaShieldAlt className="fs-4 me-2" />
          <span className="fw-semibold">RBAC Admin</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav">
          <HiMenu className="fs-3 text-light" />
        </Navbar.Toggle>
        
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <div className="d-flex flex-column flex-lg-row align-items-center gap-3 py-3 py-lg-0">
              <div className="text-center text-lg-end">
                <small className="d-flex align-items-center justify-content-center justify-content-lg-end text-light opacity-75 mb-1">
                  <FaUserCircle className="me-1" />
                  Logged in as
                </small>
                <div className="d-flex align-items-center gap-2">
                  <span className="text-light fw-semibold">{username}</span>
                  <Badge 
                    bg="light" 
                    text="primary" 
                    className="d-flex align-items-center gap-1 px-2 py-1"
                  >
                    <FaUserShield className="opacity-75" />
                    {userRole === 'admin' ? 'Admin' : 'User'}
                  </Badge>
                </div>
              </div>
              <Button 
                variant="outline-light" 
                size="sm"
                onClick={handleLogout}
                className="d-flex align-items-center gap-2 px-3"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;