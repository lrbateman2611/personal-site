import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
  return (
    <div className='site-navbar'>
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='/'>Lucas Bateman</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/age'>Age</Nav.Link>
              <Nav.Link href='/archive-bot'>Archive Bot</Nav.Link>
            </Nav>
            <Nav className='mr-auto'>
              <Navbar.Brand
                className='mr-auto'
                href='https://github.com/lrbateman2611'
                target='_blank'
              >
                <FontAwesomeIcon icon={faGithub} />
              </Navbar.Brand>
              <Navbar.Brand
                className='mr-auto'
                href='https://www.linkedin.com/in/lrb5305/'
                target='_blank'
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
