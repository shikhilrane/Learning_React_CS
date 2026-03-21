
const ChildCtoP = (props) => {

  const handleChildButtonClick = () => {
    props.handleDataFromChild();
  };

  return (
    <div>
      <p>Child Count : {props.count}</p>
      <button onClick={handleChildButtonClick}>Child Button</button>
    </div>
  );
};

export default ChildCtoP;