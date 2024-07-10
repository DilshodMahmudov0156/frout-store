import React from 'react';
import {useCart} from "react-use-cart";

function CartList({item, index}) {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();
    return (
        <div className="cart-list shadow-sm border">
            <div className="for-cart-index">
                <button className="index-btn border">{index + 1}</button>
            </div>
            <div className="for-cart-img">
                <img src={item.url} alt="" className="cart-img"/>
            </div>
            <div className="for-cart-text">
                <h4 className="cart-list-text">{item.title}</h4>
                <p className="cart-list-price">${item.price}</p>
                <div className="d-flex align-items-center">
                    <button className="counter-btn" onClick={() => {
                        updateItemQuantity(item.id, item.quantity - 1)
                    }}>
                        <i className="bi bi-dash-lg"></i>
                    </button>

                    <div className="count-text">{item.quantity}</div>

                    <button className="counter-btn" onClick={() => {
                        updateItemQuantity(item.id, item.quantity + 1)
                    }}>
                        <i className="bi bi-plus-lg"></i>
                    </button>
                </div>
            </div>
            <div className="for-delete-btn">
                <button className="cart-delete" onClick={() => {
                    removeItem(item.id)
                }}>
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default CartList;