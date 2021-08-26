import React, {useState} from 'react';
import s from './Checked.module.css';
import {checktrue, checkfalse} from "../../assets/svg/svg";

const Checked = ({item, index}) => {

    const [checked, setChecked] = useState(true)

    return (
        <div className={s.check}>
            <label className={s.label}>
                {checked? <span>{checktrue}</span> : <span>{checkfalse}</span>}
                <input type="checkbox" className={s.checkInput} onChange={() => setChecked(!checked)} checked={checked}
                />{item}{index === 1 ? <span className={s.prefix}> во {index + 1}-ой год</span> :  <span className={s.prefix}> в {index + 1}-ый год</span>}
            </label>
        </div>
    );
};

export default Checked;