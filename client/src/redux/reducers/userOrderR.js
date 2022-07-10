import { USER_ORDER, USER_DETAIL, ADDRESS_USER} from "../actions/userOrderA";

const initialState = {
    userOrder: [],
    listOrder: [],
    addressUsers: [],
}

const userOrderR = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_ORDER:
            return {
                ...state,
                userOrder: payload
               
            }
        case USER_DETAIL:
            return {
                ...state,
                listOrder: payload
                
            }
        case ADDRESS_USER:
            return {
                ...state,
                addressUsers: payload
            }

        default:
            return state;
    }
}
export default userOrderR;