import './App.css';
import RouterPart from "./parts/routerPart";
import {useState} from "react";

const imagesArray = [
    {
        id: 1,
        url: "https://firebasestorage.googleapis.com/v0/b/perfect-login-f86b1.appspot.com/o/files%2Fheader1.png?alt=media&token=08738972-ad48-4a2c-9733-5616d73b6f41",
        text: "Fesh-Fruit"
    },
    {
        id: 2,
        url: "https://firebasestorage.googleapis.com/v0/b/perfect-login-f86b1.appspot.com/o/files%2Fheader2.jpg?alt=media&token=d1d3184f-ed5b-470c-93d6-be19ec11e10b",
        text: "More-Choice"
    },
    {
        id: 3,
        url: "https://firebasestorage.googleapis.com/v0/b/perfect-login-f86b1.appspot.com/o/files%2Fheader3.png?alt=media&token=1ca3538d-4e85-4efc-9b91-c3a03190ebe1",
        text: "And-Delicioust"
    }
];


function App() {
    const [imgs, setImgs] = useState(imagesArray);
    return (
        <div className="app">
            <RouterPart imgs={imgs}/>
        </div>
    );
}

export default App;
