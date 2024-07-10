import './App.css';
import RouterPart from "./parts/routerPart";
import data from "./myDb.json";
import {db} from "./firebase-config";
import Footer from "./parts/footer";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CartProvider} from "react-use-cart";


function App() {
    const dispatch = useDispatch();
    const state = useSelector(state1 => state1);

    useEffect(() => {
        dispatch({type: 'GET_PRODUCTS', payload: data.products});
    }, []);

    const test = () => {
        console.log(state);
    }

    return (
        <div className="app">
            <CartProvider>
                <ToastContainer/>
                <RouterPart/>
            </CartProvider>
        </div>
    );
}

export default App;