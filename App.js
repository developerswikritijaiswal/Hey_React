import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);


// Nested Elements code start here
const parent = React.createElement('div',{'id':'parent'},[
    React.createElement("div",{"id":"child1",'key':'child1'},[
        React.createElement("h1",{"id": "heading1","className":'abc','key':'heading1'},"Heading 1"),
        React.createElement("h2",{"id": "heading2","key":"heading2"},"Heading 2")
    ]),
    React.createElement("div",{"id":'child2','key':'child2'},[
        React.createElement("h1",{"id": "heading3","key":"heading3"},"Heading 3"),
        React.createElement("h2",{"id": "heading4","key":"heading4"},"Heading 4")
    ])
]);

root.render(parent);