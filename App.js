import React from'react';
import ReactDOM from'react-dom/client';    
   
//JSX - Its not html , it is html-like or XML-like syntax
// JSX is first transpiled before it reahces JS - Parcel - Babel is resposible for this
// JSX => React.createElement => ReactElement-JS Obeject => HTMLElement(Render)
// do attributes as camel-case

const elem = <span>Recat Element</span>;
const Title =(
    <div id='container'> 

    <h1  className='heading'>Hi From React 

    </h1>
</div> 


);
console.log(Title);


/* 
React Components
1. Class Based Components - OLD
2. Functional Components - NEW 

*/

let number = 10000;

// Functional Component => render use <HeadingComponent/>
var HeadingComponent = () => (
    //React Fragments
    <React.Fragment> // <>   </>
  <div id='container'> 
   {/* Component Composition - When you composing two components in each otherß  */}
    {Title}   
    <h2>{number}</h2>
    <h1>This is Heading Component</h1>
    </div>
    <div id='container-2'> 
   {/* Component Composition - When you composing two components in each otherß  */}
    {Title}   
    <h2>{number}</h2>
    <h1>This is Heading Component</h1>
    </div>
    </React.Fragment>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);