// const heading = React.createElement('h1',{id:"heading", xyz:"abc"},"This is a React Js Heading saying Hello World!");

// console.log(heading); //object

//     const root = ReactDOM.createRoot(document.getElementById("root"));

//     root.render(heading);


// creating nested div 
/**
 * 
 * <div id= "parent">
 *       <div id="child">
 *      <h1>I'm h1 tag</h1>
 *      <h2>I'm h2 tag</h1>
 * </div>
 * 
 *  React.createElement(object) => HTML(Browser Understand)
 */
const parent= React.createElement(
    "div",
    {id: "parent"},
     React.createElement(
        "div",
        {id: "child1"},[
         React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"
    ) 
    ]),
    React.createElement(
        "div",
        {id: "child2"},[
         React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"
    ) 
    ])
);

console.log(parent); //object

    // const root = ReactDOM.createRoot(document.getElementById("root"));
    const root = ReactDOM.createRoot(document.getElementById("header"));
 
    root.render(parent);

