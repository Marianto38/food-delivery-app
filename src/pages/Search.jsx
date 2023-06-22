import React, { useEffect, useState } from 'react'
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../components/search/stylesSearch/stylesSearch.scss'
import Footer from '../components/home/footer/Footer'

import { actionFilterAsync, actionGetRestaurantsAsync, actionSetRecentQueries } from '../redux/actions/restaurantsActions';
import CardFilterRestaurant from '../components/search/cardFilterRestaurant/CardFilterRestaurant';


const Search = () => {

  const dispatch = useDispatch();

  const { restaurants, recentQueries  } = useSelector((store) => store.restaurants);
  const [searchValue, setSearchValue] = useState('');
  console.log(recentQueries)
  // useEffect(() => {
  //   dispatch(actionGetRestaurantsAsync());
  // }, [dispatch]);

  const { register, handleSubmit, reset } = useForm()
  const onSearch = (data) => {
    const searchParam = data.search
    console.log(searchParam);
    dispatch(actionFilterAsync(searchParam));
    // Actualizar el estado de las últimas consultas
    dispatch(actionSetRecentQueries(searchParam));
 
  }

  const onChangeSearch = (e) => {
    const searchParam = e.target.value;
    setSearchValue(searchParam);
    dispatch(actionFilterAsync(searchParam));
     // Actualizar el estado de las últimas consultas
     dispatch(actionSetRecentQueries(searchParam));
  };

  const resetForm = () => {
    reset();
   dispatch(actionFilterAsync('')); 
  }

  // const handleNavigateToDishId = (item) => {
  //   console.log('navegare a dish', item)
  // }


  return (
    <>
      <div className='container__search__ppl'>
        <div className='container__search'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='container__search__icon' />
          <form className="d-flex m-3 container__search__input" onSubmit={handleSubmit(onSearch)}>
            <Form.Control
            id="form1"
              type="search"
              {...register("search", { required: true })}
              placeholder="Search for a dish"
              className="me-2"
              aria-label="Search"
              onChange={onChangeSearch}
            />
{/*             
            <Button type='submit' variant="outline-success">Search</Button>   */}
          </form>
           <FontAwesomeIcon icon={faTrash} onClick={resetForm}/> 
        </div>
        {searchValue !== '' ? 
       <>
       {restaurants.length === 0 ? (
        <img src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1687033444/deliveryApp/kxywwe3mkggdycrpzmox.png" alt="" />
       ) : (
         restaurants.map((item) =>
           item.dishes.map((item) => (
            <div  >
             <CardFilterRestaurant key={item.id} title={item.name} image={item.image} price={item.price}  dishId={item.id} />
             </div>
           ))
         )
       )}
     </>
        
        :<div className='container__search__recentSearch'>
        <p>Recent Searches:</p>
        <ul>
        {recentQueries?.map((query, index) => (
            <div key={index}>
              <FontAwesomeIcon icon={faArrowsRotate} style={{ marginRight: '1rem' }} />
              <span>{query}</span>
            </div>
          ))}
        </ul>
      </div>}
        <Footer />
      </div>


      

    </>
  )
}

export default Search