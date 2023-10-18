import React, { useEffect, useState } from 'react'
import CartItem from '../../components/cartItem/CartItem'
import { Col, Row } from 'react-bootstrap';
import './cart.scss'

const Cart = () => {


  const [cartProducts, setCartProducts] = useState([]);
  const [isHovered, setHovered] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [discountAplied, setDiscountAplied] = useState(0);
  const [shipping, setShipping] = useState(0);

  const [totalAmount, setTotalAmount] = useState(0);
  const [changeQuantity, setChangeQuantity] = useState(false)

  // useEffect(() => {
  //   const calculatedTotal = subtotal - discountAplied + shipping;
  //   setTotalAmount(calculatedTotal);
  // }, [subtotal, discountAplied, shipping]);

  useEffect(() => {
 
    // Obtener productos del carrito desde el localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartProducts(existingCart);
    // Calcular el subtotal al cargar el componente
    calculateSubtotal(existingCart);

    const calculatedTotal = subtotal - discountAplied + shipping;
    setTotalAmount(calculatedTotal);
    setChangeQuantity(false)
    
  }, [changeQuantity]);

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

  // const removeFromCart = (productId) => {
  //   // Filtrar los productos para excluir el que se va a eliminar
  //   const updatedCart = cartProducts.filter((product) => product.id !== productId);
  //   // Actualizar el localStorage con el nuevo carrito
  //   localStorage.setItem('cart', JSON.stringify(updatedCart));
  //   // Actualizar el estado local después de la actualización del localStorage
  //   setCartProducts((prevCart) => {
  //     calculateSubtotal(updatedCart);
  //     return updatedCart;
  //   });
  // };


  return (
    <section className='cart__section'>
      <h3>Productos agregados al carrito</h3>
      <hr />
      <div style={{ overflowX: 'auto', cursor: 'grab' }}>


        {cartProducts.map((product) => (
          <CartItem key={product.id} product={product} setChangeQuantity={setChangeQuantity}/>
        ))}
      </div>
      <h3 className="mt-5">Detalles del pago</h3>
      <Row className="justify-content-between mt-2">
        <Col className="d-flex justify-content-between">
          <p>Subtotal</p>
          <p>${subtotal}</p>
        </Col>
      </Row>
      <Row className="justify-content-between">
        <Col className="d-flex justify-content-between">
          <p>Coupon Discount</p>
          <p>(-) ${discountAplied}</p>
        </Col>
      </Row>
      <Row className="justify-content-between">
        <Col className="d-flex justify-content-between">
          <p>Shipping</p>
          <p>${shipping}</p>
        </Col>
      </Row>
      <hr />
      <Row className="justify-content-between">
        <Col className="d-flex justify-content-between fw-bold">
          <p>Total</p>
          <p>${totalAmount}</p>
        </Col>
      </Row>
      {/* Otros elementos del carrito... */}
    </section>
  )
}

export default Cart