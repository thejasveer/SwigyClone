import User from "./User";
import UserClass from "./USerClass";
const About= () =>{
    return (
        <div style={{display:'flex' ,justifyContent:'space-around'}}>
            <h1>About us</h1>
                    <User name={'Jasveer'}/>
                    <UserClass name={'Jasveer'}/>
        </div>

    )
}
export default About;
