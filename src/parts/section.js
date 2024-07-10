import crossImg from "../images/cross-image.png"
import Card from "../components/card";
import {useState} from "react";
import data from "../myDb.json";

function Section() {
    const [products, setProducts] = useState(data.products);
    return (
        <>
            <section>
                <div className="container-fluid mt-4">
                    <div className="row" id="products">
                        <img src={crossImg} alt="" className="cross-img shadow-sm w-100"/>
                    </div>
                    <h3 className="section-heading">You can buy fresh fruits here.</h3>
                    <hr size={"5"} color={"#22ff00"}/>
                    <div className="row">
                        {
                            products.map(product => (<Card product={product}/>))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section;