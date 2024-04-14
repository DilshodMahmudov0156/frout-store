import crossImg from "../images/cross-image.png"
import Slider from "../components/slider";

function Section({ cardData }) {
    return (
        <section>

            <div className="container mt-5">
                <img src={crossImg} alt="" className="img-fluid mt-5"/>
                <Slider cardData={cardData}/>
                <div className="row">
                    <div className="col-xl-3">
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section;