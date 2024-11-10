// Higher order components are rarely displayed within JSX
// There for they do not use a Captial letter
export const printProps = (Component) => {
  //  This function will not display any user because we needs useEffect to fetch the user
  // And then pass the user to the component
  return (props) => {
    console.log(props);
    return <Component {...props} />;
  };
};
