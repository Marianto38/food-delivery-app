import React from 'react';
import { Container, Row, Col, ListGroup, ProgressBar } from 'react-bootstrap';
import './promotionProducts.scss'
import Countdown from '../countdown/Countdown';

const PromotionProducts = () => {
    return (
        <section className='product__section'>
            <Row>
                <Col md={12} className="px-0">
                    <Row>
                        <h3 className="">Top Save Today</h3>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <Row className="align-items-center justify-content-start ps-3">
                                <Col xs={1} className="bg-success" style={{ height: '2px', width: '10%' }}></Col>
                                <Col xs={1}>
                                    <span><i className="fa-solid fa-seedling text-success fs-3"></i></span>
                                </Col>
                                <Col xs={1} className="bg-success" style={{ height: '2px', width: '10%' }}></Col>
                            </Row>
                            <p>Don't miss this opportunity at a special discount just for this week</p>
                        </Col>
                        <Col md={4}>
                            <Countdown />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    );
}

export default PromotionProducts;
