import React from 'react';
import styles from './SelectRadio.module.css'

type ProductList = {
    product_option_id: number,
    color: string,
    product_size: string,
    stock: number
}

type Props = {
    optionList: ProductList[]
    option: (optionId: number) => void
}

const SelectRadio: React.FC<Props> = ({ optionList, option }) => {
    const selectOptionChangeHandler = (optionId: number) => {
        console.log(optionId)
        option(optionId)

    }
    return (
        <div className={styles.container}>
            {optionList.map((item: ProductList, index) => {
                return (
                    <div className={styles.optionbox} key={index}>
                        <input
                            type="radio"
                            name={`option`}
                            id={`option_${index}`}
                            value={item.product_option_id}
                            onChange={() => selectOptionChangeHandler(item.product_option_id)}
                        />

                        <label htmlFor={`option_${index}`}>
                            <div>{item.color}</div>
                            <div>{item.product_size}</div>
                        </label>

                    </div>

                )
            })}
        </div>
    );
};

export default SelectRadio;