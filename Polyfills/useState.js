const useStateHook = (initialValue = undefined) => {
  let state = initialValue; // []
  function setState(val) {
    if (typeof val === "function") {
      state = val(state);
    } else {
      state = val;
    }
  }
  return { state, setState }; // return [[], function]
};
