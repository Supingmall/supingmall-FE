import React from 'react';
type Props = {
    color: []
}


const Selector = ({ color }: any) => {
    console.log(color)
    return (
        <div>
            <select>
                {color?.map((item: string) => {
                    return (<option value={item}>{item}</option>)
                })}

            </select>
        </div>
    );
};

export default Selector;