import React, { useEffect, useState } from 'react'
import CartItem from '../../components/cartItem/CartItem'
import { Col, Row } from 'react-bootstrap';
import ProductCardWithHover from '../../components/productCardWithHover/ProductCardWithHover';
import './favorites.scss'

const Favorites = () => {

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

    return (
        <section className='cart__section'>
            <h3>Productos agregados a tus favoritos</h3>
            <hr />
            <Row className='favorites__products'>
                {cartProducts.map((product) => (
                    <ProductCardWithHover key={product.id} product={product} />
                ))}
            </Row>

        </section>
    )
}

export default Favorites