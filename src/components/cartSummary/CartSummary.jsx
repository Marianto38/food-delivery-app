import React from 'react';
import { Row, Col } from 'react-bootstrap';

const CartSummary = ({ subTotal, discountAplied, shipping, total }) => {
  return (
    <>
      <Row className="justify-content-between">
        <Col className="d-flex justify-content-between">
          <p>Subtotal</p>
          <p>${subTotal}</p>
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
      <Row className="justify-content-between">
        <Col className="d-flex justify-content-between">
          <p>Total</p>
          <p>${total}</p>
        </Col>
      </Row>
    </>
  );
};

export default CartSummary;
