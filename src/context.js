import {createContext, useReducer} from "react";
import {ref, set} from "firebase/database";
import {db} from "./firebase-config";
import {ulid} from "ulid";

const data = {
    products: [],
    orders: [],
};

export const Context = createContext();

const reducer = (state = data, action ) => {
    const {type, payload} = action;

    switch (type) {
        case "POST":
        function writeUserData()  {
            set(ref(db, ulid()), {
                id: ulid(),
                name: "Dilshod"
            });
        }
        return writeUserData();
        case "ON_LOG":
            return console.log(state);
            default:
                return {state};
    };
}

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, data);
    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export default Provider;


