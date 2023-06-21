// import {
//   createUserWithEmailAndPassword,
//   signOut,
//   updateProfile,
//   signInWithEmailAndPassword,
//   signInWithPopup,
// } from "firebase/auth";
// import { auth } from "../../firebase/firebaseConfig";
// import { userTypes } from "../types/userTypes";
// import Swal from 'sweetalert2';


// export const registerActionAsync = ({ email, password, fullName, avatar, birthday, phone }) => {
//   return async (dispatch) => {
//     try {
//       const { user } = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       await updateProfile(auth.currentUser, {
//         displayName: fullName,
//         photoURL: avatar,
//       });
//       const { accessToken } = user.auth.currentUser;
//       console.log(user);
//       dispatch(registerActionSync({ email, fullName, avatar, accessToken, birthday, phone }, null));
//       if (user) {
//         const Toast = Swal.mixin({
//           toast: true,
//           position: 'top-end',
//           showConfirmButton: false,
//           timer: 3000,
//           timerProgressBar: true,
//           didOpen: (toast) => {
//             toast.addEventListener('mouseenter', Swal.stopTimer)
//             toast.addEventListener('mouseleave', Swal.resumeTimer)
//           }
//         })
//         Toast.fire({
//           icon: 'success',
//           title: '¡Login Success!'
//         })

//       } else {
//         Swal.fire({
//           position: 'top-end',
//           icon: 'error',
//           title: '¡Please, try again!',
//           showConfirmButton: false,
//           timer: 1500
//         })
//       }
//     } catch (error) {
//       console.log(error);
//       dispatch(
//         registerActionSync({}, { code: error.code, message: error.message })
//       );
//     }
//   };
// };

// const registerActionSync = (newUser, error) => {
//   return {
//     type: userTypes.CREATE_USER,
//     payload: {
//       user: newUser,
//       error: error,
//     },
//   };
// };

// export const logoutActionAsync = () => {
//   return async (dispatch) => {
//     let errors = null;
//     try {
//       await signOut(auth);
//     } catch (error) {
//       console.log(error);
//       errors = {
//         error: true,
//         code: error.code,
//         message: error.message,
//       };
//     } finally {
//       dispatch(logoutActionSync(errors));
//     }
//   };
// };

// const logoutActionSync = (error) => {
//   return {
//     type: userTypes.LOGOUT_USER,
//     payload: error,
//   };
// };

// export const loginActionAsync = (email, password) => {
//   return async (dispatch) => {
//     try {
//       const { user } = await signInWithEmailAndPassword(auth, email, password);

//       const { displayName, accessToken, photoURL } = user.auth.currentUser;

//       const userLogged = {
//         email,
//         fullName: displayName,
//         avatar: photoURL,
//         accessToken,
//       };

//       dispatch(loginActionSync(userLogged));
//       if (userLogged) {
//         const Toast = Swal.mixin({
//           toast: true,
//           position: 'top-end',
//           showConfirmButton: false,
//           timer: 2000,
//           timerProgressBar: true,
//           didOpen: (toast) => {
//             toast.addEventListener('mouseenter', Swal.stopTimer)
//             toast.addEventListener('mouseleave', Swal.resumeTimer)
//           }
//         })
//         Toast.fire({
//           icon: 'success',
//           title: '¡Loggin Success!'
//         })

//       } else {
//         Swal.fire({
//           position: 'top-end',
//           icon: 'error',
//           title: '¡Please, try again!',
//           showConfirmButton: false,
//           timer: 1500
//         })
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
// export const loginActionSync = (user) => {
//   return {
//     type: userTypes.LOGGIN_USER,
//     payload: user,
//   };
// };

// export const actionLoginGoogleOrFacebook = (provider) => {
//   return (dispatch) => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const { displayName, accessToken, photoURL, phoneNumber, email } =
//           result.user;
//         console.log(result.user);
//         dispatch(
//           loginActionSync({
//             email,
//             fullName: displayName,
//             accessToken,
//             avatar: photoURL,
//             phone: phoneNumber,
//             error: false,
//           })
//         );
//         if (result.user) {
//           const Toast = Swal.mixin({
//             toast: true,
//             position: 'top-end',
//             showConfirmButton: false,
//             timer: 2000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//               toast.addEventListener('mouseenter', Swal.stopTimer)
//               toast.addEventListener('mouseleave', Swal.resumeTimer)
//             }
//           })
//           Toast.fire({
//             icon: 'success',
//             title: '¡Inicio de sesión exitoso!'
//           })

//         } else {
//           Swal.fire({
//             position: 'top-end',
//             icon: 'error',
//             title: '¡Por favor intentalo nuevamente!',
//             showConfirmButton: false,
//             timer: 1500
//           })
//         }
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         const email = error.customData.email;
//         console.log(error);
//         console.log(errorCode);
//         console.log(errorMessage);
//         dispatch(loginActionSync({ email, error: true, errorMessage }));
//       });
//   };
// };

// export const updateUserAsync = (user, displayName, photoURL, phone, birthday) => {
//   return async (dispatch) => {
//     try {
//       await updateProfile(user, {
//         displayName: displayName,
//         photoURL: photoURL,
//         phoneNumber: phone,
//         birthday: birthday
//       });

//       dispatch(updateUserSync({ displayName, photoURL, phone, birthday }, null));
//     } catch (error) {
//       console.log(error);
//       dispatch(
//         updateUserSync({}, { code: error.code, message: error.message })
//       );
//     }
//   };
// };

// const updateUserSync = (updatedUser, error) => {
//   return {
//     type: userTypes.UPDATE_USER,
//     payload: {
//       user: updatedUser,
//       error: error,
//     },
//   };
// };


import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { userTypes } from "../types/userTypes";
import Swal from 'sweetalert2';


export const registerActionAsync = ({ email, password, fullName, avatar, birthday, phone }) => {
  return async (dispatch) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(auth.currentUser, {
        displayName: fullName,
        photoURL: avatar,
        phoneNumber: phone,
      });
      const { accessToken } = user.auth.currentUser;
      console.log(user);
      dispatch(registerActionSync({ email, fullName, avatar, accessToken, birthday, phone }, null));
      if (user) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: '¡Login Success!'
        })

      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: '¡Please, try again!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    } catch (error) {
      console.log(error);
      dispatch(
        registerActionSync({}, { code: error.code, message: error.message })
      );
    }
  };
};

const registerActionSync = (newUser, error) => {
  return {
    type: userTypes.CREATE_USER,
    payload: {
      user: newUser,
      error: error,
    },
  };
};

export const logoutActionAsync = () => {
  return async (dispatch) => {
    let errors = null;
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
      errors = {
        error: true,
        code: error.code,
        message: error.message,
      };
    } finally {
      dispatch(logoutActionSync(errors));
    }
  };
};

const logoutActionSync = (error) => {
  return {
    type: userTypes.LOGOUT_USER,
    payload: error,
  };
};

export const loginActionAsync = (email, password) => {
  return async (dispatch) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      const { displayName, accessToken, photoURL } = user.auth.currentUser;

      const userLogged = {
        email,
        fullName: displayName,
        avatar: photoURL,
        accessToken,
      };

      dispatch(loginActionSync(userLogged));
      if (userLogged) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: '¡Loggin Success!'
        })

      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: '¡Please, try again!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const loginActionSync = (user) => {
  return {
    type: userTypes.LOGGIN_USER,
    payload: user,
  };
};

export const actionLoginGoogleOrFacebook = (provider) => {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, accessToken, photoURL, phoneNumber, email } =
          result.user;
        console.log(result.user);
        dispatch(
          loginActionSync({
            email,
            fullName: displayName,
            accessToken,
            avatar: photoURL,
            phone: phoneNumber,
            error: false,
          })
        );
        if (result.user) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: '¡Inicio de sesión exitoso!'
          })

        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: '¡Por favor intentalo nuevamente!',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        console.log(error);
        console.log(errorCode);
        console.log(errorMessage);
        dispatch(loginActionSync({ email, error: true, errorMessage }));
      });
  };
};

// export const updateUserAsync = (user, displayName, photoURL, avatar, birthday, phone ) => {
//   return async (dispatch) => {
//     try {
//       await updateProfile(user, {
//         displayName: displayName,
//         photoURL: avatar,
//         phoneNumber: phone,

//       });

//       dispatch(updateUserSync({ displayName, photoURL, phone, birthday }, null));
//     } catch (error) {
//       console.log(error);
//       dispatch(
//         updateUserSync({}, { code: error.code, message: error.message })
//       );
//     }
//   };
// };

// const updateUserSync = (updatedUser, error) => {
//   return {
//     type: userTypes.UPDATE_USER,
//     payload: {
//       user: updatedUser,
//       error: error,
//     },
//   };
// };
// export const updateUserAsync = (displayName, photoURL, phone, birthday) => {
//   return async (dispatch) => {
//     try {
//       await updateProfile(auth.currentUser, {
//         displayName: displayName,
//         photoURL: photoURL,
//       });

//       dispatch(updateUserSync({ displayName, photoURL, phone, birthday }, null));
//     } catch (error) {
//       console.log(error);
//       dispatch(
//         updateUserSync({}, { code: error.code, message: error.message })
//       );
//     }
//   };
// };

export const updateUserSync = (updatedUser, error) => {
    return {
      type: userTypes.UPDATE_USER,
      payload: {
        user: updatedUser,
        error: error,
      },
    };
  };


export const updateUserActionAsync = ( email, fullName, avatar, birthday, phone ) => {
  return async (dispatch) => {
    try {
      
      await updateProfile(auth.currentUser, {
        displayName: fullName,
        photoURL: avatar,
        phoneNumber: phone,
      });
   
      dispatch(updateUserSync({ email, fullName, avatar, birthday, phone }, null));
      // if (user) {
      //   const Toast = Swal.mixin({
      //     toast: true,
      //     position: 'top-end',
      //     showConfirmButton: false,
      //     timer: 3000,
      //     timerProgressBar: true,
      //     didOpen: (toast) => {
      //       toast.addEventListener('mouseenter', Swal.stopTimer)
      //       toast.addEventListener('mouseleave', Swal.resumeTimer)
      //     }
      //   })
      //   Toast.fire({
      //     icon: 'success',
      //     title: '¡Login Success!'
      //   })

      // } else {
      //   Swal.fire({
      //     position: 'top-end',
      //     icon: 'error',
      //     title: '¡Please, try again!',
      //     showConfirmButton: false,
      //     timer: 1500
      //   })
      // }
    } catch (error) {
      console.log(error);
      dispatch(
        updateUserSync({}, { code: error.code, message: error.message })
      );
    }
  };
};


