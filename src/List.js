import React, { useDeferredValue, useEffect, useMemo, useState } from 'react'

function List({ input }) {
    const LIST_SIZE = 20000;
    const deferredInput = useDeferredValue(input);
    const list = useMemo(() => {
        const l = [];
        for(let i = 0; i <= LIST_SIZE; i++ ){
            l.push(input);
        }
        return l;
    },[deferredInput])

    useEffect(() => {
        console.log('input value = ',input,'deferred value = ',deferredInput);
    },[input,deferredInput]);

    return list;

//   return (
//     {list.map((item,index) => {
//         return (<div key={index}>{item}</div>);
//     })}
//   )
}

export default List