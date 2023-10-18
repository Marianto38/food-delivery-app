import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { BsFillDashCircleFill, BsPlusCircleFill } from 'react-icons/bs';

import Swal from 'sweetalert2';
import ProductCardWithHover from '../productCardWithHover/ProductCardWithHover';
import client from '../../sanity/client';

export const url = "http://localhost:3000/products";
export const urlProducts = "http://localhost:3000/products";
export const urlShopping = "http://localhost:3000/shopping"
export const urlFavorites = "http://localhost:3000/favorites"

const ProductContainer = () => {
  const [products, setProducts] = useState([
    {
      "id": 2,
      "name": "Jamon Sanduche Zenú",
      "weight": "450g",
      "price": "13000",
      "discount": "5",
      "category": "Grocery & Staples",
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
      "category": "Vegetables & fruits",
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
      "category": "Vegetables & fruits",
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
      "category": "Vegetables & fruits",
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
      "category": "Vegetables & fruits",
      "icon": "https://img.icons8.com/pastel-glyph/1x/beetroot-and-carrot-1.png",
      "img": "https://exitocol.vtexassets.com/arquivos/ids/14954301-500-auto?v=638001775734100000&width=500&height=auto&aspect=true",
      "quantity": 0
    },
  ]);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(urlProducts);
  //       setProducts(Object.values(response.data));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  //   const obtenerObjetoPorId = async (id, urlToPost) => {
  //     try {
  //       const response = await axios.get(`${url}/${id}`);
  //       const response2 = await axios.post(urlToPost, response.data);
  //       console.log(response2);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   const printHeart = async (idProduct) => {
  //     const productsInFavorites = await axios.get(`${urlFavorites}?id=${idProduct}`);
  //     return productsInFavorites.data[0] ? 'text-danger' : '';
  //   };

  //   const handleProductClick = (event) => {
  //     const productTarget = event.target.getAttribute("data-product");
  //     if (productTarget === "product") {
  //       event.preventDefault();
  //       console.log('voy a ver product');
  //       const productToShow = event.target.getAttribute("id");
  //       localStorage.setItem("productToShow", JSON.stringify(productToShow));
  //       window.location.href = "./product.html";
  //     } else if (productTarget === "favorite") {
  //       event.preventDefault();
  //       console.log('voy a agregar a favoritos');
  //       const Toast = Swal.mixin({
  //         toast: true,
  //         position: 'top-end',
  //         showConfirmButton: false,
  //         timer: 3000,
  //         timerProgressBar: true,
  //         didOpen: (toast) => {
  //           toast.addEventListener('mouseenter', Swal.stopTimer);
  //           toast.addEventListener('mouseleave', Swal.resumeTimer);
  //         },
  //       });

  //       Toast.fire({
  //         icon: 'success',
  //         title: 'Se agregó a Favorito',
  //       });

  //       const productToFavorite = event.target.getAttribute("id");
  //       localStorage.setItem("productToFavorite", JSON.stringify(productToFavorite));
  //       const productId = JSON.parse(localStorage.getItem("productToFavorite")) || 0;
  //       console.log(productId);
  //       obtenerObjetoPorId(productId, urlFavorites);
  //     } else if (productTarget === "add") {
  //       event.preventDefault();
  //       console.log('voy a agregar a carrito');
  //       const Toast = Swal.mixin({
  //         toast: true,
  //         position: 'top-end',
  //         showConfirmButton: false,
  //         timer: 3000,
  //         timerProgressBar: true,
  //         didOpen: (toast) => {
  //           toast.addEventListener('mouseenter', Swal.stopTimer);
  //           toast.addEventListener('mouseleave', Swal.resumeTimer);
  //         },
  //       });

  //       Toast.fire({
  //         icon: 'success',
  //         title: 'Se agregó a carrito',
  //       });

  //       const productToCart = event.target.getAttribute("id");
  //       localStorage.setItem("productToCart", JSON.stringify(productToCart));
  //       const productIdFromJson = JSON.parse(localStorage.getItem("productToCart")) || 0;
  //       obtenerObjetoPorId(productIdFromJson, urlShopping);
  //     }
  //   };


  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product"] {
          id,
          reference,
          name,
          description,
          price,
          discount,
          category,
          stock,
          productImage {
            asset->{
              _id,
              url
            }
          }
        }`
      )
      .then((data) => setProductsData(data))
      .catch(console.error);
  }, []);
  
  console.log(productsData);


  return (
    <Container>
      <Row>
        {productsData?.map((product) => (
          <ProductCardWithHover key={product.id} product={product} />
        ))}

      </Row>
    </Container>
  );
};

export default ProductContainer;

