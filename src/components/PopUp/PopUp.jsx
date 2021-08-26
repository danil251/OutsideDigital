import React, {useState} from 'react';
import s from './PopUp.module.css'
import {close} from '../../assets/svg/svg'
import Checked from "../Checked/Checked";

const PopUp = ({setOpenIsPopUp, openIsPopUp}) => {

    const [salary, setSalary] = useState('')
    const [error, setError] = useState('')
    const [taxDeductionArray, setTaxDeductionArray] = useState([])
    const [reduce, setReduce] = useState('payment')

    const inputHandler = (e) => {
        const value = e.replace(/[^\d.]/g, '')
        setSalary(value)
    }
    const calculate = () => {
        if (salary) {
            setError(false)
            let array = []
            let taxDeduction = Math.floor(salary * 12 * 0.13)
            let iteration = Math.ceil(260000 / taxDeduction)
            let meaning = 260000
            for (let i = 0; i < iteration; i++) {
                if (meaning - taxDeduction > 0) {
                    meaning = meaning - taxDeduction
                    array.push(taxDeduction + ' рублей')
                } else {
                    array.push(meaning + ' рублей')
                }
            }
            setTaxDeductionArray(array)
        } else {
            setError(true)
            setTaxDeductionArray([])
        }

    }

    const item = taxDeductionArray.map((item, index) => <Checked key={index} index={index} item={item}/>)
    return (
        <div className={s.bg}>
            <div className={s.popUp}>
                <div className={s.close} onClick={() => setOpenIsPopUp(!openIsPopUp)}>{close}</div>
                <h2 className={s.title}>Налоговый вычет</h2>
                <div className={s.text}>Используйте налоговый вычет чтобы погасить ипотеку досрочно.
                    Размер налогового вычета составляет не более 13% от своего официального годового дохода.
                </div>
                <div className={s.salary}>Ваша зарплата в месяц</div>
                <input  className={error ? `${s.input} ${s.errorInput}` : `${s.input}`} type="tel"
                       placeholder='Введите данные' value={salary? Number(salary).toLocaleString('ru-RU') : salary}
                       onChange={(e) => inputHandler(e.target.value)}/>
                {error ? <div className={s.error}>Поле обязательно для заполнения</div> : <div className={s.error}/>}
                <div className={s.redText} onClick={calculate}>Расчитать</div>
                {taxDeductionArray.length ?
                    <div className={s.total}>Итого можете внести в качестве досрочных:</div> : null}
                {taxDeductionArray.length ? item : null}
                <div className={s.reduceWrap}>
                    <div className={s.reduceTitle}>Что уменьшаем?</div>
                    <div className={s.flex}>
                        <div className={reduce === 'payment' ? `${s.selected}` : `${s.payment}`}
                             onClick={() => setReduce('payment')}>Платёж
                        </div>
                        <div className={reduce === 'limitation' ? `${s.selected}` : `${s.limitation}`}
                             onClick={() => setReduce('limitation')}>Срок
                        </div>
                    </div>

                </div>
                <button className={s.btnAdd}>Добавить</button>
            </div>
        </div>
    );
};

export default PopUp;