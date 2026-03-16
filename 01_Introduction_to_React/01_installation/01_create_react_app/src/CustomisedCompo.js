function Customised() {
    return(
        <h2>This is customised component</h2>
    )
}

export default Customised;



/*
    1. We must give extension .js or .jsx to our component
    2. It only render the function which starts with capital letter, means if we start Customised() with small c then it will give error
    3. This component can be injected in main.js through App.js as well as directly in main.js
    4. To inject this component, we first have to import this element in to targetted js file
        import Customised from "./CustomisedCompo"
    5. export default Customised; = we can have multiple function in this file but can only export single function
*/