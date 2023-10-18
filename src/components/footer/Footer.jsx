import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Footer = () => {
  return (
    <section className="bg-info">
      <Container className="pt-3 px-3">
        <Row>
          <Col md={3}>
            <img src="../images/logo.png" alt="" style={{ width: '50%' }} className="mb-3" />
            <p>An online platform where users can browse a wide variety of products from different categories</p>
            <p><i className="fa-solid fa-house-chimney"></i><span className="ps-2">1418 Riverwood Drive, CA 96052, US</span></p>
            <p><i className="fa-solid fa-envelope"></i><span className="ps-2">support@fastkart.com</span></p>
          </Col>
          <Col md={3}>
            <h6 className="mb-3">Categories</h6>
            <p>Vegetables & fruits</p>
            <p>Beverages</p>
            <p>Frozen Foods</p>
            <p>Biscuits & Snacks</p>
            <p>Groceries & Staples</p>
          </Col>
          <Col md={2}>
            <h6 className="mb-3">Useful Links</h6>
            <p>Home</p>
            <p>Shop</p>
            <p>About Us</p>
            <p>Blog</p>
            <p>Contact Us</p>
          </Col>
          <Col md={2}>
            <h6 className="mb-3">Help Center</h6>
            <p>Your Order</p>
            <p>Your Account</p>
            <p>Track Order</p>
            <p>Your WishList</p>
            <p>Search</p>
            <p>FAQ</p>
          </Col>
          <Col md={2}>
            <Row>
              <h6 className="mb-4">Contact Us</h6>
              <p><i className="fa-solid fa-phone"></i><span className="ps-2">HotLine 24/7: <br /> <span className="ps-4 fw-bold">+91 888 104 2340</span> </span></p>
              <hr />
            </Row>
            <Row>
              <h6 className="mb-4">Email Address</h6>
              <p><i className="fa-solid fa-envelope"></i><span className="ps-2">Email Address: <br /> <span className="ps-4 fw-bold">fastkart@hotmail.com</span> </span></p>
              <hr />
            </Row>
            <p>Download app:</p>
            <Row className="p-0 align-items-center">
              <Col xs={6}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx3qYW0NCqkolO0D64U6CLRz2dJqB-ALn_MQ&usqp=CAU" alt="" style={{ maxWidth: '100%' }} />
              </Col>
              <Col xs={6}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HudE2ZgEZPomI1KkhV6TeEleQjo7vBkFKw&usqp=CAU" alt="" style={{ maxWidth: '100%' }} />
              </Col>
            </Row>
          </Col>
          <hr className="mt-4" />
        </Row>

        <Row className="justify-content-between pb-3">
          <Col>
            <p>©2022 Fastkart all rights reserved</p>
          </Col>

          <Col>
            <i className="fa-brands fa-cc-paypal payment-methods"></i>
            <i className="fa-brands fa-cc-visa payment-methods"></i>
            <i className="fa-brands fa-cc-mastercard payment-methods"></i>
            <i className="fa-brands fa-stripe payment-methods"></i>
            <i className="fa-brands fa-cc-amex payment-methods"></i>
          </Col>
          <Col>
            <span className="pe-3">Stay connected:</span>
            <i className="fa-brands fa-facebook-f social-link"></i>
            <i className="fa-brands fa-twitter social-link"></i>
            <i className="fa-brands fa-instagram social-link"></i>
            <i className="fa-brands fa-pinterest social-link"></i>
          </Col>
        </Row>

        <img src="https://www.flaticon.com/free-icon/fruit_2902017?term=vegetable&related_id=2902017" alt="" />
      </Container>
    </section>
  );
}

export default Footer;
