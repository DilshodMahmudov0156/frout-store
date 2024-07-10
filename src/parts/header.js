import {Link} from "react-router-dom";

function Header({}) {
    return (
        <header>
            <div className="masc">
                <h3 className="header-content">
                    Dou you want to eat fresh fruits?
                    <br/>
                    <hr/>
                    <span>
                        Let's eat with us!
                    </span>
                    <br/>
                    <a href="#products" className="header-btn">start shopping</a>
                </h3>
            </div>
        </header>
    );
}

export default Header;