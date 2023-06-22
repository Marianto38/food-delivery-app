import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { restaurantsTypes } from "../types/userTypes";

const collectionName = "restaurants";

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
      console.log(restaurants)
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(actionFilterRestaurantsSync(restaurants));
    }
  };
};

const actionFilterRestaurantsSync = (restaurants) => {
  return {
    type: restaurantsTypes.RESTAURANTS_FILTERED,
    payload: {
      restaurants: restaurants,
    },
  };
};