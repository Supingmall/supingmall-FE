import style from "./Counter.module.css"

type CounterProps = {
    width: number | string;
    height: number | string;
};

const Counter = ({ width, height }: CounterProps) => {
    const buttonWidth = typeof width === 'number' ? width / 3 : width;

    return (
        <div className={style["detail-head__counter"]} style={{ width, height }}>
            <div className={style["detail-head__counter_button"]} style={{ width: buttonWidth }}>+</div>
            <input className={style["detail-head__counter_input"]} style={{ width }} type="number" min="0" max="100" step="1" />
            <div className={style["detail-head__counter_button"]} style={{ width, height }}>-</div>
        </div >
    );
};

export default Counter;