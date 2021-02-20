const logger = (store) => (next) => (action) => {
  console.group(String(action.type).toLocaleLowerCase().replace("_", " "));
  console.log("The action: ", action);
  const returnValue = next(action);
  console.log("The new state: ", returnValue);
  console.groupEnd();
  return returnValue;
};
export default logger;
