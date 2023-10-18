import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsFillDashCircleFill, BsFillSuitHeartFill, BsPlusCircleFill } from 'react-icons/bs';
import './productCardWithHover.scss'


const ProductCardWithHover = ({product}) => {
    //console.log(product);

    const [quantityInCart, setQuantityInCart] = useState(0);

    const getQuantityInCart = (productId) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = existingCart.find((item) => item.id === productId);
        return existingProduct ? existingProduct.quantity : 0;
    };
    
    useEffect(() => {
        // Verificar que product y product.id existan antes de llamar a getQuantityInCart
        if (product && product.id) {
            const existingProduct = getQuantityInCart(product.id);
            setQuantityInCart(existingProduct);
        }
    }, [product.id]);
    
    
    
      const handleAddProductToCart = (product) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = [...existingCart];
        const existingProduct = updatedCart.find((item) => item.id === product.id);
    
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          product.quantity = 1;
          updatedCart.push(product);
        }
    
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setQuantityInCart(existingProduct ? existingProduct.quantity : 1);
      };
    

    const handleSumProduct = (product) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = [...existingCart];

        // Buscar el producto en el carrito
        const existingProduct = updatedCart.find((item) => item.id === product.id);

        if (existingProduct) {
            // Incrementar la cantidad
            existingProduct.quantity += 1;
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            console.log('Cantidad aumentada:', existingProduct);
        }
        setQuantityInCart(existingProduct ? existingProduct.quantity : 0);
    };

    const handleSubtractProduct = (product) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = [...existingCart];

        // Buscar el producto en el carrito
        const existingProduct = updatedCart.find((item) => item.id === product.id);

        if (existingProduct) {
            // Decrementar la cantidad, y eliminar si llega a cero
            existingProduct.quantity -= 1;

            if (existingProduct.quantity <= 0) {
                // Eliminar el producto del carrito si la cantidad es cero o menos
                const index = updatedCart.indexOf(existingProduct);
                updatedCart.splice(index, 1);
            }

            localStorage.setItem('cart', JSON.stringify(updatedCart));
            console.log('Cantidad disminuida:', existingProduct);
        }
        setQuantityInCart(existingProduct ? existingProduct.quantity : 0);
    };

    const handleProductToFavorite = (product) => {
        console.log('favorite', product);
    }

    const priceWithDiscount = (product) => {
        return product.price - (product.price * product.discount / 100)
    }
  
    return (
        <>
        {product  && (
        <Col key={product.id} className="card-product">
            <div className="card h-100" style={{width:'250px'}} >
                <div className="row justify-content-center card-links">
                    <div className="col px-3" >
                        <i className="fa-solid fa-eye" ></i>
                    </div>
                    <div className="col border-start border-end px-3">
                        <i className="fa-solid fa-arrows-rotate"></i>
                    </div>

                </div>
                <div className="new"></div>
                <div className="d-flex justify-content-center productCardWithHover__img">
                    <img src={product.mainImage.asset.url} alt="..." style={{ height: '150px' }} />
                </div>
                <BsFillSuitHeartFill className='productCardWithHover__heart' onClick={() => handleProductToFavorite(product)} />
                <div className="card-body">
                    {/* <p className="card-text text-truncate">{product.category}</p> */}
                    <h5 className="card-title title fs-6">{product.name}</h5>
                    {/* <p className="card-text text-truncate">{product.weight}</p> */}
                    <p className="card-text text-truncate text-success">
                        {Number(product.price) !== Number(priceWithDiscount(product)) ? (
                            <>
                                <span>${priceWithDiscount(product)}&nbsp;</span>
                                <span className="text-decoration-line-through text-dark">
                                    ${product.price}
                                </span>
                            </>
                        ) : (
                            <span className="card-text text-truncate text-success">
                                ${product.price}
                            </span>
                        )}
                    </p>



                </div>
                <div>
                    <div className="row bg-success justify-content-center align-items-center mx-2 mb-3 py-1 rounded-pill">
                        <div className="col text-start">
                            <BsFillDashCircleFill className='productCardWithHover__btns' onClick={() => handleSubtractProduct(product)} />
                        </div>
                        <div className="col text-center d-flex align-items-center">
                            {quantityInCart > 0 ? (
                                <Col className="col text-center" onClick={() => handleAddProductToCart(product)} >{quantityInCart}</Col>
                            ) :
                                (
                                    <Col className="col text-center" onClick={() => handleAddProductToCart(product)} >ADD</Col>
                                )
                            }
                        </div>
                        <div className="col text-end">
                            <BsPlusCircleFill className='productCardWithHover__btns' onClick={() => handleSumProduct(product)} />
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )}
    </>
    )
};


export default ProductCardWithHover;

