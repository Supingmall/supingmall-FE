import { forwardRef, useState } from "react";
import style from "./Counter.module.css";

type CounterProps = {
    width: string;
    height: string;
};

// forwardRef의 제네릭 타입을 HTMLDivElement로 수정
const Counter = forwardRef<HTMLDivElement, CounterProps>(({ width, height }, ref) => {
    const [value, setValue] = useState(0);

    const plusHandler = () => {
        setValue(value + 1);
    };

    const minusHandler = () => {
        if (!value) {
            return;
        }
        setValue(value - 1);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    };

    return (
        <div className={style["detail-head__counter"]} style={{ width, height }} ref={ref}>
            <div className={style["detail-head__counter_button"]} onClick={minusHandler}>
                <img className={style["detail-head__counter_button_image"]} src="/detailpage/minusButton.svg" alt="" />
            </div>
            <input className={style["detail-head__counter_value"]} value={value} onChange={handleInputChange} />
            <div className={style["detail-head__counter_button"]} onClick={plusHandler}>
                <img className={style["detail-head__counter_button_image"]} src="/detailpage/plusButton.svg" alt="" />
            </div>
        </div>
    );
});

export default Counter;