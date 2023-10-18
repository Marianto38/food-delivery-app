import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsFillDashCircleFill, BsFillSuitHeartFill, BsPlusCircleFill } from 'react-icons/bs';
import './productCard.scss'


const ProductCard = (product) => {

    const handleAddProductToCart = (product) => {
        console.log('agregarc carrito', product);
    }
    const handleSumProduct = (product) => {
        console.log('sumar', product);
    }
    const handleSubstractProduct = (product) => {
        console.log('restar', product);
    }
    const handleProductToFavorite = (product) => {
        console.log('favorite', product);
    }
    return (
        <Col key={product.id} className="card-product">
            <div className="card h-100">
                <div className="row justify-content-center card-links">
                    <div className="col px-3" >
                        <i className="fa-solid fa-eye" ></i>
                    </div>
                    <div className="col border-start border-end px-3">
                        <i className="fa-solid fa-arrows-rotate"></i>
                    </div>
 
                </div>
                <div className="new"></div>
                <div className="d-flex justify-content-center productCard__img">
                    <img src={product.img} alt="..." style={{ maxHeight: '150px' }} />
                </div>
                <BsFillSuitHeartFill className='productCard__heart' onClick={() => handleProductToFavorite(product)} />
                <div className="card-body">
                    <p className="card-text text-truncate">{product.category}</p>
                    <h5 className="card-title title fs-6">{product.name} {product.weight}</h5>
                    <p className="card-text text-truncate">{product.weight}</p>
                    <p className="card-text text-truncate text-success">
                        ${product.price - (product.price * product.discount / 100)}&nbsp;
                        <span className="text-decoration-line-through text-dark">
                            ${product.price}
                        </span>
                    </p>
                </div>
                <div>
                    <div className="row bg-success justify-content-center align-items-center mx-2 mb-3 py-1 rounded-pill">
                        <div className="col text-start">
                            <BsFillDashCircleFill className='productCard__btns' onClick={() => handleSubstractProduct(product)} />
                        </div>
                        <div className="col">
                            <p onClick={() => handleAddProductToCart(product)} >ADD</p>
                        </div>
                        <div className="col text-end">
                            <BsPlusCircleFill className='productCard__btns' onClick={() => handleSumProduct(product)} />
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
};


export default ProductCard;

