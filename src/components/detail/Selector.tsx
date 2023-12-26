import React, { forwardRef } from 'react';

type SelectorProps = {
    item?: string[]; // '?'를 추가하여 선택적(optional) 속성임을 나타냅니다.
};

const Selector = forwardRef<HTMLSelectElement, SelectorProps>(({ item = [] }, ref) => {
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        // 선택한 값에 대한 로직 추가...
    };

    return (
        <div>
            <select ref={ref} onChange={handleSelectChange}>
                {item.map((value: string) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    );
});

export default Selector;
