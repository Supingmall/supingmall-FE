import { useState } from "react";
import style from "./Counter.module.css"

type CounterProps = {
    width: string;
    height: string;
};

const Counter = ({ width, height }: CounterProps) => {
    const [value, setValue] = useState(0)

    const plusHandler = () => {
        setValue(value + 1)
    }
    const minusHandler = () => {
        if (!value) {
            return
        }
        setValue(value - 1)
    }
    return (
        <div className={style["detail-head__counter"]} style={{ width, height }}>
            <div className={style["detail-head__counter_button"]} onClick={plusHandler} >
                <img className={style["detail-head__counter_button_image"]} src="/detailpage/plusButton.svg" alt="" /></div>
            <input className={style["detail-head__counter_value"]} value={value} />
            <div className={style["detail-head__counter_button"]} onClick={minusHandler}>
                <img className={style["detail-head__counter_button_image"]} src="/detailpage/minusButton.svg" alt="" /></div>
        </div>
    );
};

export default Counter;