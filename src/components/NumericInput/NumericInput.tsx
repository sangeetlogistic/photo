import React, { forwardRef } from 'react';
import { Input } from 'antd';

const NumericInput = forwardRef((props: any, ref: any) => {
    const { value, onChange } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: inputValue } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if ((reg.test(inputValue) || inputValue === '' || inputValue === '-') && inputValue !== '-0') {
            onChange(inputValue);
        }
    };

    // '.' at the end or only '-' in the input box.
    const handleBlur = () => {
        let valueTemp = value.toString();

        if (valueTemp.charAt(valueTemp.length - 1) === '.' || valueTemp === '-') {
            valueTemp = value.slice(0, -1);
        }
        onChange(valueTemp.replace(/0*(\d+)/, '$1'));
    };

    return <Input {...props} onChange={handleChange} onBlur={handleBlur} ref={ref} />;
});

export default NumericInput;
