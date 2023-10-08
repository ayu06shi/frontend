import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import './navBar.css';

function UnderlineExample() {
  return (
    <Nav variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#docs">Documentation</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="#terminal">Terminal</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#about">About</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default UnderlineExample;