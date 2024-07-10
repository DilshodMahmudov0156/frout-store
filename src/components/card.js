import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {useCart} from "react-use-cart";
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';


function Card({ product }) {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('cart'))){
            setCart(JSON.parse(localStorage.getItem('cart')));
            console.log(cart);
        }
    }, [localStorage.getItem('cart')]);
    const addToCart = (product) => {
        const productList = [...cart];
        if (!productList.includes(product)){
            productList.push(product);
        }
        const index = productList.indexOf(product);
        productList[index].quantity++;
        setCart(productList);
        localStorage.setItem("cart", JSON.stringify(cart));
        toast.success('Fruit is added successfully!');
    }

    const {addItem} = useCart();

    return (
        <div className="col-sm-6 col-lg-4 col-xl-3 mt-4">
            <div className="my-card shadow">
                <SkeletonTheme baseColor="#c7c7c7" highlightColor="#ffff">
                    <img src={product.url} alt="product image" className="img-fluid"/>
                    <div className="d-flex justify-content-between">
                        <h5>{product.title}</h5>
                        <p>{product.price}$</p>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="see-btn" onClick={() => {
                            addItem(product)
                        }}>add <i className="bi bi-cart-plus"></i>
                        </button>
                    </div>
                    {/*<Link to={`/products/${product.id}`} className="see-btn my-2">*/}
                    {/*    See <i className="bi bi-zoom-in"></i>*/}
                    {/*</Link>*/}
                </SkeletonTheme>
            </div>
        </div>
    );
}

export default Card;