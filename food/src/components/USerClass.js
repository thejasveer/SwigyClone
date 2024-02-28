import React from 'react';
class UserClass extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            count:0
        }

    }
     render(){
     const   {count} = this.state;
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>Count : {count}</h1>
                <button onClick={()=>{
                      this.setState({
                            count:this.state.count+1
                      });
                }}>Increment</button>
                <h2>Winnipeg</h2>
                <h1>thejasveer13@gmail.com</h1>
            </div>
        )


    }




}
export default UserClass;