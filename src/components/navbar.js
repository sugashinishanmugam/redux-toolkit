import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navigation = () => {
    const products = useSelector(state => state.cart);
    console.log(products, products.size);
    return ( 
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand to="/" as={Link}>Redux Toolkit</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={Link}>Products</Nav.Link>
                    <Nav.Link to="cart" as={Link} className='justify-content-end'><i class="bi bi-bag">{products.length}</i></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
     );
}
 
export default Navigation;