import './App.css';
import RouterPart from "./parts/routerPart";
import {db} from "./firebase-config";
import {useContext} from "react";
import {Context} from "./context";


function App() {

    const value = useContext(Context);
    const {state, dispatch} = value;

    return (
        <div className="app">
            <button className="btn btn-warning" onClick={() => {dispatch({type: "POST", payload: null})}}>
                click on it
            </button>
            <RouterPart/>
        </div>
    );
}

export default App;