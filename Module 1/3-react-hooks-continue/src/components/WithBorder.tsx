//higher order function
const withBorder = (WrappedComponent) => {
  //wrappedComponent er porps ekahne pabo
  return (props) => (
    <div style={{ border: "1px solid red", borderRadius: "505" }}>
      <WrappedComponent {...props}/>
    </div>
  );
};

export default withBorder;
