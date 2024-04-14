import './App.css';
import RouterPart from "./parts/routerPart";
import data from "./db.json";


function App() {
    console.log(data);
    return (
        <div className="app">
            <RouterPart/>
        </div>
    );
}

export default App;
