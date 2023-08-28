import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { restaurantsTypes } from "../types/userTypes";

const collectionName = "restaurants";

//FUNCIÓN PARA TRAER TODOS LOS RESTAURANTES DESDE FIREBASE

export const actionGetRestaurantsAsync = () => {
  return async (dispatch) => {
    const restaurantsCollection = collection(dataBase, collectionName);
    const querySnapshot = await getDocs(restaurantsCollection);
    const restaurants = [];
    try {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        restaurants.push({
          id: doc.id,
          ...doc.data(),
        });
        //   console.log(doc.id, " => ", doc.data());
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(actionGetRestaurantsSync(restaurants));
    }
  };
};

const actionGetRestaurantsSync = (restaurants) => {
  return {
    type: restaurantsTypes.RESTAURANTS_GET,
    payload: {
      restaurants: restaurants,
    },
  };
};

// FUNCIÓN PARA FILTRAR LOS RESTAURANTES POR LAS CATEGORIAS

export const actionFilterRestaurantsAsync = (searchParam, searchValue) => {
  return async (dispatch) => {
    const restaurantsCollection = collection(dataBase, collectionName);
    const q = query(restaurantsCollection, where(searchParam, "==", searchValue));
    const restaurants = [];
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        restaurants.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(actionFilterRestaurantsSync(restaurants));
    }
  };
};




// FUNCION PARA FILTRAR RESTAURANTES CON EL BUSCADOR

const actionFilterRestaurantsSync = (restaurants) => {
  return {
    type: restaurantsTypes.RESTAURANT_FILTERED,
    payload: {
      restaurants: restaurants,
    },
  };
};


export const actionFilterAsync = (searchParam) => {
  return async (dispatch) => {
    const restaurantsCollection = collection(dataBase, collectionName);
    const querySnapshot = await getDocs(restaurantsCollection);
    const restaurants = [];
    try {
      querySnapshot.forEach((doc) => {

        const restaurant = {
          id: doc.id,
          dishes: [],
        };

        doc.data().dishes.forEach((dish) => {
          if (dish.name.toLowerCase().includes(searchParam.toLowerCase())) {
            restaurant.dishes.push(dish);
          }
        });

        if (restaurant.dishes.length > 0) {
          restaurants.push(restaurant);
        }

        console.log(doc.id, " => ", restaurant.dishes);
      });

      console.log(restaurants);
      dispatch(actionFilterRestaurantsSync(restaurants));
    } catch (error) {
      console.error(error);
      dispatch(actionFilterRestaurantsSync([]));
    }
  };
};


//FUNCIÓN PARA MOSTRAR LAS ULTIMAS CONSULTAS EN SEARCH

export const actionSetRecentQueries = (query) => {
  return {
    type: restaurantsTypes.SET_RECENT_QUERIES,
    payload: query,
  };
};