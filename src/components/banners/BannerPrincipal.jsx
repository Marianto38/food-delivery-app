import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './bannerPrincipal.scss'
import { Link } from 'react-router-dom';

const BannerPrincipal = () => {
  return (
    <section className='bannerPrincipal__section'>
      <Row>
        <Col xs={12} md={7} className="bg-info rounded-3 me-4 bannerPrincipal__info">
          <Row className="align-items-center ">
            <Col xs={12} md={6} ps-2 ps-md-5>
              <p className="fs-5"> Exclusive offer <span className="badge rounded-pill bg-warning bg-opacity-10 text-danger">30% off</span></p>
              <h3>STAY HOME & DELIVERED YOUR</h3>
              <h3><span className="text-success fw-bold fs-1">DAILY NEEDS</span></h3>
              <p>vegetables contain many vitamins and minerals that are good for your health.</p>
        
                <Link to="catalogo" className="text-white">Shop Now </Link>
              
            </Col>
            <Col xs={12} md={6} pb-0>
              <img src="../images/frutas-banner.png" alt="" style={{ maxHeight: '350px' }} />
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={5} style={{ maxWidth: '500px' }}>
          <Row className="rounded-3 py-3" style={{ backgroundImage: 'linear-gradient(rgba(249, 245, 245, 0.4),rgba(253, 252, 252, 0.4)), url(../images/bg-nut.png)', backgroundSize: 'cover' }}>
            <Row className="align-items-center">
              <Col ps-3 w-50>
                <p className="text-danger fs-3 mb-0 fw-bold">45% <span className="text-dark fs-6"> OFF</span></p>
                <h3><span className="text-success fw-bold fs-5 pt-0 mt-0">Nut Colection</span></h3>
                <p className="w-50">We deliver organic vegetables & fruits</p>
                <Button variant="transparent" className="ps-0">Shop Now <i className="fa-solid fa-arrow-right"></i></Button>
              </Col>
            </Row>
          </Row>
          <Row className="rounded-3 py-3 mt-4" style={{ backgroundImage: 'linear-gradient(rgba(249, 245, 245, 0.1),rgba(253, 252, 252, 0.1)), url(../images/bg-3.jpg)', backgroundSize: 'cover' }}>
            <Row className="align-items-center">
              <Col ps-3 w-50>
                <h3><span className="text-success fw-bold fs-5 pt-0 mt-0">HeaktyFood</span></h3>
                <p className="text-danger fs-5 mb-0">Organic Market</p>
                <p className="w-50">Start your daily shopping with som...</p>
                <Button variant="transparent" className="ps-0">Shop Now <i className="fa-solid fa-arrow-right"></i></Button>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </section>
  );
}

export default BannerPrincipal;
