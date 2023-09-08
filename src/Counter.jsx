import React, { useState } from "react";

import { Button, Space } from 'antd';

import * as buttonStyles from './counter.module.scss'


export default (props) => {

    const [count, setCount] = useState(props.initialValue)

    const increment = () => {
        setCount(count + 1)
    };

    const decrement = () => {
        setCount(count - 1)
    };

    const reset = () => {
        setCount(props.initialValue)
    };



    return (
        <div className={buttonStyles.conteiner}>
            <div className={buttonStyles.block}>
            <Button  onClick={decrement} className={buttonStyles.btn}>-</Button>
            <p className={buttonStyles.count}>{count}</p>
            <Button  onClick={increment} className={buttonStyles.btn}>+</Button>
            </div>
            <Button type="primary"  onClick={reset} className={buttonStyles.reset}>Reset</Button>
        </div>
    );
}





