import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from './components/Header';
import BodyComponent from './components/Body';

// -------------------------------- Nested Elements code start here ------------------ ------------
// - Nested Elements code start here
// const parent = React.createElement('div',{'id':'parent'},[
//     React.createElement("div",{"id":"child1",'key':'child1'},[
//         React.createElement("h1",{"id": "heading1","className":'abc','key':'heading1'},"Heading 1"),
//         React.createElement("h2",{"id": "heading2","key":"heading2"},"Heading 2")
//     ]),
//     React.createElement("div",{"id":'child2','key':'child2'},[
//         React.createElement("h1",{"id": "heading3","key":"heading3"},"Heading 3"),
//         React.createElement("h2",{"id": "heading4","key":"heading4"},"Heading 4")
//     ])
// ]);
// ------------------------------ Nested Elements code end here ------------------ ------------

// core react :- (react.createElement => react element (JS object) => HTML element)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hey React By Swikriti 🤓",
);

//JSX :- (JSX(with the help of Babel) => react.createElement => react element (JS object) => HTML element)
// react element
const jsxHeading = (
  <div>
    <h1 className="head">Hey React with JSX By Swikriti 🫶🏻</h1>
  </div>
);

//react component (1. functional component)
const Title = () => <h1>Heading from Title Component</h1>;

const count = 1000;

const HeadingComponents = () => {
  return (
    <div className="container">
      {console.log("count", count)} {/*js code can be written here*/}
      {100 + 200}
      {Title()} {/* function call */}
      <Title /> {/* using component as a tag */}
      <Title></Title> {/* different ways to call functional component */}
      {jsxHeading} {/* using react element created by JSX */}
      {heading} {/* using react element created by react.createElement */}
      <h1 className="heading">functional Component!</h1>
    </div>
  );
};

const AppMain = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponents />);
root.render(<AppMain/>);
