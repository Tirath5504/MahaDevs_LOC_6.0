import myContext from "./myContext";
import React, { useState } from 'react'

const MyState = (props) => {
    const [floorNo, setFloorNo] = useState(1);
    return (
        <myContext.Provider value={{ floorNo, setFloorNo }}>
            {props.children}
        </myContext.Provider>
    )
}

export default MyState
