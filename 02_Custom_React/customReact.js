//                                      Learning how React renders component using vanilla JS

// 4.
function customRender(container, reactElement) {
    const domElement = document.createElement                       // Created a element in DOM
    (reactElement.type);                                            // State its type (tag type i.e. <a></a>)
    domElement.innerHTML = reactElement.content;                    // Pushed content within a tag (<a>Click me to visit google</a>)
    // domElement.setAttribute("href", reactElement.props.href);       // Setted its attribute as "href" (<a href="https://google.com">Click me to visit google</a>)
    // domElement.setAttribute("target", reactElement.props.target);   // Setted its attribute as "target"  (<a href="https://google.com" target="_blank">Click me to visit google</a>)

    // second way to setAttribute
    for (const prop in reactElement.props) {
        if (prop === "children") continue;                          // If the property is "children", skip it because it's not an HTML attribute
        domElement.setAttribute(prop, reactElement.props[prop])     // setting an attributes and values in domElement ("href", "https://google.com") & ("target", "_blank")
    }

    // Element created now push that element in container

    container.appendChild(domElement)                               // Pushed created element (domElement) in container (mainContainer)
}

// 2. 
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    content: "Click me to visit google"
}

// 1.
const mainContainer = document.getElementById("root")

// 3.
customRender(mainContainer, reactElement)

/*
    Understanding
    1. Targetted "root" element from index.js 

    2. Created an HTML element using an Object
        Basically it is,
            <a href="https://google.com" target="_blank">Click me to visit google</a>
            <a></a>                                             = type
            href="https://google.com" and target="_blank"       = props
            Click me to visit google                            = content

    3. Function(customRender) in which we pass the element made using JS(reactElement) and to which tag it is going to inject(mainContainer)

    4. Made a function in which we linked reactElement's properties in DOM

    NOTE : This is the way how React works
*/