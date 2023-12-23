import React from 'react';
type Props = {
    item: string[]
}


const Selector = ({ item }: Props) => {
    return (
        <div>
            <select>
                {item?.map((item: string) => {
                    return (<option key={item} value={item}>{item}</option>)
                })}
            </select>
        </div>
    );
};

export default Selector;