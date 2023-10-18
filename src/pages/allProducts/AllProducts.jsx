import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import ProductCardWithHover from '../../components/productCardWithHover/ProductCardWithHover';
import './allProducts.scss'
import { Navbar, Nav, Container, Dropdown, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faSearch, faUser, faCartShopping, faHeart, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';


const AllProducts = () => {

    const [products, setProducts] = useState([
        {
            "id": 2,
            "name": "Jamon Sanduche Zenú",
            "weight": "450g",
            "price": "13000",
            "discount": "5",
            "category": "mugs",
            "icon": "https://img.icons8.com/pastel-glyph/1x/beetroot-and-carrot-1.png",
            "img": "https://exitocol.vtexassets.com/arquivos/ids/1975512-500-auto?v=1768703000&width=500&height=auto&aspect=true",
            "quantity": 0
        },
        {
            "id": 3,
            "name": "Lechuga Batavia por libra",
            "weight": "500g",
            "price": "2700",
            "discount": "5",
            "category": "mugs",
            "icon": "https://img.icons8.com/pastel-glyph/1x/beetroot-and-carrot-1.png",
            "img": "https://exitocol.vtexassets.com/arquivos/ids/13316101-800-auto?v=637911326790670000&width=800&height=auto&aspect=true",
            "quantity": 0
        },
        {
            "id": 4,
            "name": "Papa pastusa a granel",
            "weight": "1kg",
            "price": "3800",
            "discount": "0",
            "category": "gorras",
            "icon": "https://img.icons8.com/pastel-glyph/1x/beetroot-and-carrot-1.png",
            "img": "https://exitocol.vtexassets.com/arquivos/ids/15938992-500-auto?v=1768703155&width=500&height=auto&aspect=true",
            "quantity": 0
        },
        {
            "id": 5,
            "name": "Cebolla junca",
            "weight": "500g",
            "price": "6300",
            "discount": "10",
            "category": "conjuntos",
            "icon": "https://img.icons8.com/pastel-glyph/1x/beetroot-and-carrot-1.png",
            "img": "https://exitocol.vtexassets.com/arquivos/ids/11324872-500-auto?v=1768706426&width=500&height=auto&aspect=true",
            "quantity": 0
        },
        {
            "id": 6,
            "name": "Plátano",
            "weight": "1kg",
            "price": "4000",
            "discount": "0",
            "category": "termos",
            "icon": "https://img.icons8.com/pastel-glyph/1x/beetroot-and-carrot-1.png",
            "img": "https://exitocol.vtexassets.com/arquivos/ids/14954301-500-auto?v=638001775734100000&width=500&height=auto&aspect=true",
            "quantity": 0
        },
    ]);

    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    const filteredProducts = products.filter((product) => {
        return selectedCategory === "all" || product.category === selectedCategory;
    });


    return (
        <section className="allProducts__section">
            <Row>
                <Col className='allProducts__categories'>
                <button className='allProducts__categories__btn' onClick={() => handleCategoryClick('all')}>TODOS</button>
                    <button className='allProducts__categories__btn' onClick={() => handleCategoryClick('mugs')}>MUGS</button>
                    <button className='allProducts__categories__btn' onClick={() => handleCategoryClick('gorras')}>GORRAS</button>
                    <button className='allProducts__categories__btn' onClick={() => handleCategoryClick('termos')}>TERMOS</button>
                    <button className='allProducts__categories__btn' onClick={() => handleCategoryClick('franelas')}>FRANELAS</button>
                    <button className='allProducts__categories__btn' onClick={() => handleCategoryClick('conjuntos')}>CONJUNTOS DEPORTIVOS</button>

                </Col>

            </Row>
            <hr />

            <Row>
                <Col sm={2}>
                    <p>holaa</p>
                </Col>
                <Col sm={10}>
                    <Row>
                        {filteredProducts.map((product) => (
                            <ProductCardWithHover key={product.id} product={product} />
                        ))}

                    </Row>
                </Col>

            </Row>
        </section>
    )
}

export default AllProducts