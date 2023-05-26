    const parent = React.createElement(
        "div"
        ,{id:"parent"},
        React.createElement(
            "div",
             {"id":"child"},
             [
                React.createElement("h1",{},"I am h1 tag"),
                React.createElement("h2",{},"I am h2 tag"),

        ]
    
    ));
    
    
    //React.createElement is creating new element using react cdn
    const heading = React.createElement("h1",{"id":"heading"},"Hello world from React");
    //ReactDOM is responsible for manipulating the DOM
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);