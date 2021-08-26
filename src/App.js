import s from './App.module.css';
import {useState} from "react";
import PopUp from "./components/PopUp/PopUp";

function App() {

    const [openIsPopUp, setOpenIsPopUp] = useState(false)

    return (
        <div className={s.App}>
            <button className={s.btn} onClick={() => {
                setOpenIsPopUp(!openIsPopUp)
            }}> Налоговоый вычет
            </button>
            {openIsPopUp ? <PopUp setOpenIsPopUp={setOpenIsPopUp} openIsPopUp={openIsPopUp}/> : null}
        </div>
    );
}

export default App;
