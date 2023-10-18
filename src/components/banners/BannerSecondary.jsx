import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './bannerSecondary.scss'

const BannerSecondary = () => {
  return (
    <section className='bannerSecondary__section'>
        <Row className="mt-4">
          <Col xs={12} md={4}>
            <Row className="align-items-center">
              <Col xs={12} className="ps-0 bg-info bg-card-offer py-3 rounded-3" style={{ position: 'relative', height: '12rem' }}>
                <div className="bg-offer p-0 m-0">
                  <p className="text-danger ps-3 fs-5 mb-0">5% OFF</p>
                  <p className="fw-bold ps-3 pt-0 mt-0 mb-0">Hot Deals on New Items</p>
                  <p className="ps-3 pt-0 mt-0">Daily Essentials Eggs & Dairy</p>
                </div>
                <img src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1696889472/bnn8xqmgmisz3du2vtuw.png" alt="" className="img-publi-3 " />
                <div className="oval"></div>
                <Button type="button" className="promotions btn btn-success text-light pb-0">Shop Now <i className="fa-solid fa-arrow-right"></i></Button>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <Row className="g-1 rounded-3">
              <Col xs={12} className="ps-0 bg-info bg-card-offer py-3 rounded-3" style={{ position: 'relative', height: '12rem' }}>
                <div className="bg-offer p-0 m-0">
                  <p className="text-danger ps-3 fs-5 mb-0">5% OFF</p>
                  <p className="fw-bold ps-3 pt-0 mt-0 mb-0">Buy More & Save More</p>
                  <p className="ps-3 pt-0 mt-0">Fresh Vegetables</p>
                </div>
                <img src="../images/fruit.png" alt="" className="img-publi-3" />
                <div className="oval"></div>
                <Button type="button" className="promotions btn btn-danger text-light pb-0">Shop Now <i className="fa-solid fa-arrow-right"></i></Button>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <Row className="rounded-3">
              <Col xs={12} className="ps-0 bg-info bg-card-offer py-3 rounded-3" style={{ position: 'relative', height: '12rem' }}>
                <div className="bg-offer p-0 m-0">
                  <p className="text-danger ps-3 fs-5 mb-0">5% OFF</p>
                  <p className="fw-bold ps-3 pt-0 mt-0 mb-0">Organic Meat Prepared</p>
                  <p className="ps-3 pt-0 mt-0">Delivered to Your Home</p>
                </div>
                <img src="../images/meet.png" alt="" className="img-publi-3" />
                <div className="oval"></div>
                <Button type="button" className="promotions btn btn-warning text-light pb-0">Shop Now <i className="fa-solid fa-arrow-right"></i></Button>
              </Col>
            </Row>
          </Col>
        </Row>
    </section>
  );
}

export default BannerSecondary;
