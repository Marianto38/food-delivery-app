import { userTypes } from "../types/userTypes";

const initialValue = {
    user: {},
    error: null,
    paymentMethods: {}
}


const userReducer = (state = initialValue, action) => {
    switch (action.type) {
        case userTypes.CREATE_USER:

            return {
                ...state,
                user: {
                    ...action.payload.user
                },
                error: action.payload.error
            }
        case userTypes.LOGOUT_USER:
            return {
                ...state,
                user: null,
                error: action.payload
            }
        case userTypes.LOGGIN_USER:
            return {
                ...state,
                user: {
                    ...action.payload
                }
            }
        case userTypes.UPDATE_USER:
            return {
                ...state,
                user: {
                    ...action.payload.user
                }
            }
            case userTypes.UPDATE_METHODS:
                return {
                  ...state,
                  user: {
                    ...state.user,
                  },
                  paymentMethods:{
                    ...action.payload
                  }
                };
              
        default:
            return {
                ...state
            }
    }
}

export default userReducer;