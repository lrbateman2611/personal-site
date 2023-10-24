import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Container fluid className='app-container'>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
