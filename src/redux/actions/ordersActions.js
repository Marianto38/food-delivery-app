import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { ordersTypes } from "../types/orderTypes";

const collectionName = "orders";

export const actionGetOrdersAsync = () => {
  return async (dispatch) => {
    const ordersCollection = collection(dataBase, collectionName);
    const querySnapshot = await getDocs(ordersCollection);
    const orders = [];
    try {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        orders.push({
          id: doc.id,
          ...doc.data(),
        });
        //   console.log(doc.id, " => ", doc.data());
      });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(actionGetOrdersSync(orders));
    }
  };
};

const actionGetOrdersSync = (orders) => {
  return {
    type: ordersTypes.GET_ORDERS,
    payload: {
      orders: orders,
    },
  };
};
//************************FUNCION PARA AGREGAR UNA ORDEN***************************

export const actionAddOrderAsync = (orders) => {
  return async (dispatch) => {
    try {
      const ordersCollection = collection(dataBase, collectionName);
      const docs = await addDoc(ordersCollection, orders);
      dispatch(actionAddOrderSync({ id: docs.id, ...orders }));
    } catch (error) {
      console.log(error);
      dispatch(actionAddOrderSync({}));
    }
  };
};

const actionAddOrderSync = (orders) => {
  return {
    type: ordersTypes.ADD_ORDER,
    payload: orders,
  };
};

//************************FUNCION PARA FILTRAR LAS ORDENES***************************

// export const actionFilterOrdersAsync = (searchParam, searchValue) => {
//   return async (dispatch) => {
//     const ordersCollection = collection(dataBase, collectionName);
//     const q = query(ordersCollection, where(searchParam, "==", searchValue));
//     const orders = [];
//     try {
//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach((doc) => {
//         orders.push({
//           id: doc.id,
//           ...doc.data(),
//         });
//       });
//     } catch (error) {
//       console.log(error);
//     } finally {
//       dispatch(actionFilterOrdersSync(orders));
//     }
//   };
// };



// const actionFilterOrdersSync = (orders) => {
//   return {
//     type: ordersTypes.ORDERS_FILTERED,
//     payload: {
//       orders: orders,
//     },
//   };
// };


// export const actionFilterAsync = (searchParam) => {
//   return async (dispatch) => {
//     const ordersCollection = collection(dataBase, collectionName);
//     const querySnapshot = await getDocs(ordersCollection);
//     const orders = [];
//     try {
//       querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         orders.push({
//           id: doc.id,
//           ...doc.data(),
//         });
//         //   console.log(doc.id, " => ", doc.data());
//       });
  
//       const filterdOrders = orders.filter((item) =>
//         item.name.toLowerCase().includes(searchParam.toLowerCase())
//       );
//       dispatch(actionFilterOrdersSync(filterdOrders));
//     } catch (error) {
//       console.error(error);
//       dispatch(actionFilterOrdersSync([]));
//     }
//   };
// };