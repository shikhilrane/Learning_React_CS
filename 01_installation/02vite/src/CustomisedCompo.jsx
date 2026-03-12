function Customised() {
    return(
        <h3>This is customised component</h3>
    )
}

export default Customised;


/*
    1. We must give extension .jsx to our component
    2. It only render the function which starts with capital letter, means if we start Customised() with small c then it will give error
    3. This component can be injected in main.jsx through App.jsx as well as directly in main.jsx
    4. To inject this component, we first have to import this element in to targetted jsx file
        import Customised from "./CustomisedCompo"
    5. export default Customised; = we can have multiple function in this file but can only export single function
*/