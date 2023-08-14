import { useState } from "react";

const User = ({name}) =>{

    const [count,setCount] = useState(0)
    return (
        <div>
            <h1>{name}</h1>
            <h1>Count : {count}</h1>
            <h2>Winnipeg</h2>
            <h1>thejasveer13@gmail.com</h1>
        </div>
    )
}
export default User;