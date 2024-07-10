import {useCart} from "react-use-cart";
import CartList from "../components/cart-list";
import {useEffect} from "react";
import {Link} from "react-router-dom";

function Cart() {

    var totalPrice = 0;

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    return (
        <div className="container-fluid text-center mt-5">
            <Link to="/" className="btn my-success-bg text-muted"><i class="bi bi-house-door"></i> Home Page</Link>
            <div className="row justify-content-center mt-4">
                <div className="col-sm-9 col-md-6 col-lg-5 col-xl-4 cart-row border shadow-sm py-4 px-4 rounded-4">
                    <h3 className="text-center cart-heading">My cart <i className="bi bi-cart4"></i></h3>
                    <div>
                        {
                            items.length > 0 ?
                                items.map((item, index) => {
                                    totalPrice += item.price * item.quantity;
                                    return (

                                        <CartList item={item} index={index}/>
                                    )
                                }) :
                                <>
                                    <h3 className="text-warning text-center">
                                        Cart is empty!
                                    </h3>
                                    <h5 className="cart-warning text-center">Add something!</h5>
                                </>
                        }
                        <div className="d-flex justify-content-between mt-4 align-items-center">
                            <h4 className="mx-2 text-warning">
                                your total price: <span className="my-success-color mx-3">$ {totalPrice}.00</span>
                            </h4>
                            {totalPrice ?
                                <button className="buy-btn">
                                    <i className="bi bi-check2-circle"></i> BUY
                                </button> : null}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;