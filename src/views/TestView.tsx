import React from 'react';
import {useParams} from "react-router-dom";

export const TestView = () => {
    const something = useParams();
    console.log(something);

    return (
        <>
            <h1>Test!</h1>
            <p>{something}</p>
        </>
    )
};