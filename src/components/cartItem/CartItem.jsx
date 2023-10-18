import React, { useEffect, useState } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { BsFillDashCircleFill, BsPlusCircleFill } from 'react-icons/bs';
import './cartItem.scss'

const CartItem = ({ product , setChangeQuantity}) => {


    const [cartProducts, setCartProducts] = useState([]);
    const [subtotal, setSubtotal] = useState(0);


    const calculateDiscountedPrice = () => {
        return product.price - (product.price * product.discount / 100);
    };

    const calculateSavings = () => {
        return product.price - calculateDiscountedPrice();
    };


    const getQuantityInCart = (productId) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = existingCart.find((item) => item.id === productId);
        return existingProduct ? existingProduct.quantity : 0;
    };

    const [quantityInCart, setQuantityInCart] = useState(0);

    useEffect(() => {
        const existingProduct = getQuantityInCart(product.id);
        setQuantityInCart(existingProduct);
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
            setQuantityInCart(existingProduct ? existingProduct.quantity : 0);
            setChangeQuantity(true)
        }
    };

    const handleSubtractProduct = (product) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = [...existingCart];

        // Buscar el producto en el carrito
        const existingProduct = updatedCart.find((item) => item.id === product.id);

        if (existingProduct) {
            // Decrementar la cantidad, y eliminar si llega a cero
            existingProduct.quantity -= 1;
            setChangeQuantity(true)

            if (existingProduct.quantity <= 0) {
                // Eliminar el producto del carrito si la cantidad es cero o menos
                const index = updatedCart.indexOf(existingProduct);
                updatedCart.splice(index, 1);
                
            }
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        }
        setQuantityInCart(existingProduct ? existingProduct.quantity : 0);
    };



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

    const calculateSubtotal = (cartProducts) => {
        let total = 0;
        cartProducts.forEach((product) => {
            const totalItem = product.quantity * (product.price - (product.price * product.discount / 100));
            total += totalItem;
        });
        setSubtotal(total);
    };


    return (
        <div className="border-bottom align-items-center cartItem__row">
            <Col className=" d-flex align-items-center text-center">
                <img src={product.img} alt={product.name} className="img-fluid rounded-start" style={{ maxWidth: '50px' }} />
            </Col>
            <Col className="">
                <Row><p className="text-truncate" style={{ maxWidth: '150px' }}>{product.name}</p></Row>
                {/* <Row><p>Sold By: {product.soldBy}</p></Row> */}
                <Row><p>Quantity: {product.weight}</p></Row>
            </Col>
            <Col>
                {/* <Row><p>Price</p></Row> */}
                <Row>
                    <p>${calculateDiscountedPrice()} <span className="text-decoration-line-through">${product.price}</span></p>
                </Row>
                <Row><p className="text-success">You Save: ${calculateSavings()}</p></Row>
            </Col>
            <Col>
                {/* <Row><p>Qty</p></Row>  */}
                <Row className="bg-success justify-content-center align-items-center cartItem__quantity">
                    <Col className="text-center">
                        <BsFillDashCircleFill className='productCard__btns' onClick={() => handleSubtractProduct(product)} />
                    </Col>
                    <Col>
                        <p className="card-text text-center" data-add-to-cart="add">{product.quantity}</p>
                    </Col>
                    <Col className="text-center">
                        <BsPlusCircleFill className='productCard__btns' onClick={() => handleSumProduct(product)} />
                    </Col>
                </Row>
            </Col>
            <Col>
                {/* <Row><p>Total</p></Row> */}
                <Row><p>${product.quantity * calculateDiscountedPrice()}</p></Row>
              
            </Col>
            <Col>
                {/* <Row><p>Action</p></Row> */}
                <Row data-favorite="favorite" ><a href="#" className="link-success" data-favorite="favorite" id={product.id}>Save for later</a></Row>
                <Row data-delete="delete-of-cart" ><a href="#" className="link-danger" data-delete="delete-of-cart" onClick={() => removeFromCart(product.id)}>Remove</a></Row>
            </Col>
        </div>
    );
};

export default CartItem;
