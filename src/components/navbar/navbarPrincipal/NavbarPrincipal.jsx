import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button, Badge, Dropdown, Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faHeart, faCartShopping, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import './navbarPrincipal.scss'
import { BsBagHeart, BsFillXCircleFill, BsShop, BsSuitHeart } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';

const NavbarPrincipal = () => {

  const [cartProducts, setCartProducts] = useState([]);
  const [isHovered, setHovered] = useState(false);
  const [subtotal, setSubtotal] = useState(0);


useEffect(() => {
    if (isHovered ) {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartProducts(existingCart);
    }
}, [isHovered]);

// Efecto para calcular el subtotal cuando cambian los productos del carrito
useEffect(() => {
    calculateSubtotal(cartProducts);
}, [cartProducts]);

  const calculateSubtotal = (cartProducts) => {
    let total = 0;
    cartProducts.forEach((product) => {
      const totalItem = product.quantity * (product.price - (product.price * product.discount / 100));
      total += totalItem;
    });
    setSubtotal(total);
  };

  // const addToCart = (product) => {
  //   // Agregar el producto al carrito
  //   const updatedCart = [...cartProducts, product];
  //   // Actualizar el localStorage
  //   localStorage.setItem('cart', JSON.stringify(updatedCart));
  //   // Actualizar el estado local después de la actualización del localStorage
  //   setCartProducts((prevCart) => {
  //     const newCart = [...prevCart, product];
  //     calculateSubtotal(newCart);
  //     return newCart;
  //   });
  // };

  const removeFromCart = (productId) => {
    // Filtrar los productos para excluir el que se va a eliminar
    const updatedCart = cartProducts.filter((product) => product.id !== productId);
    // Actualizar el localStorage con el nuevo carrito
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    // Actualizar el estado local después de la actualización del localStorage
    setCartProducts((prevCart) => {
      calculateSubtotal(updatedCart);
      return updatedCart;
    });
  };

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      // Clic fuera del componente, cierra el componente
      setHovered(false);
    }
  };


  useEffect(() => {
    // Agregar un controlador de clic al documento
    document.addEventListener('click', handleClickOutside);

    // Limpiar el controlador de clic al desmontar el componente
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);



  return (
    <Navbar bg="light" expand="lg" className="navbarPrincipal__nav navbar-light bg-light fixed-top">
      <Navbar.Brand className="fs-4 navbar__logo" href="/"><img src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1695915108/b7kbpmyxrakvalukuhka.png" alt="" style={{ width: '90px' }} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto">
          {/* Puedes agregar elementos de navegación aquí si es necesario */}
        </Nav>
        {/* <Form className="d-flex">
          <FormControl type="search" placeholder="I'm searching for..." id="mySearch" name="buscador" className="mr-2 navbar__search" />
          <Button variant="outline-success" type="submit"><FontAwesomeIcon icon={faSearch} className="vector-search" /></Button>
        </Form> */}
        <div className="justify-content-end text-center ms-5">
          <Navbar.Brand href="/catalogo" className="fs-5 px-3 text-center m-0 border-end"><BsShop/></Navbar.Brand>
          <Navbar.Brand href="/favoritos" className="fs-5 px-3 text-center m-0 border-end"><BsSuitHeart/></Navbar.Brand>
          <Navbar.Brand  ref={ref} className=" px-3 text-center m-0 border-end navbarPrincipal__iconCart" onClick={() => setHovered(!isHovered)} ><GiShoppingCart style={{ fontSize:'1.5rem' }}/></Navbar.Brand>
          {isHovered && (
            <div className="navbarPrincipal__container__cart">
              <>
                {cartProducts.length > 0 ? (
                  cartProducts.map((product) => (
                    <Card className="mb-0" style={{ minWidth: '300px' }} key={product.id}>
                      <Row className="g-0 pt-2 navbarPrincipal__productCard">
                        <Col md={3} className="text-center ">
                          <Card.Img src={product.img} alt={product.name} className="img-fluid rounded-start" style={{ width: '50px' }} />
                        </Col>
                        <Col md={9} className='navbarPrincipal__productCard__name'>
                          <Card.Body className="py-0 ">
                            <Card.Title className="text-truncate text-success navbarPrincipal__productCard__name">{product.name}</Card.Title>
                            <Card.Text>
                              <small className="navbarPrincipal__productCard__quantity">
                                <span>{product.quantity}</span> x ${product.price - (product.price * product.discount / 100)}
                              </small>
                            </Card.Text>
                          </Card.Body>
                        </Col>
                      </Row>
                      <BsFillXCircleFill
                        className="navbarPrincipal__btn__delete"
                        data-delete="delete-of-cart"
                        id={product.id}
                        style={{ color: '#000000' }}
                        onClick={() => removeFromCart(product.id)}
                      />
                    </Card>
                  ))
                ) : (
                  <p>Su carrito está vacío</p>
                )}
                <Row className="justify-content-between mt-3 align-items-center">
                  <Col className="d-flex justify-content-between">
                    <p>Subtotal</p>
                    <p>${subtotal}</p>
                  </Col>
                  <Col className="">
                    <Button href="/carrito" variant="success"> Checkout</Button>
                  </Col>
                </Row>
              </>
            </div>
          )}

          {/* <Navbar.Brand href="/login" className="fs-5 px-3 text-center m-0 border-end"><FontAwesomeIcon icon={faUser} /></Navbar.Brand> */}

        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarPrincipal;
