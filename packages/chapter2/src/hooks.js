export function createHooks(callback) {

  const useState = (initState) => {
    let variable = initState;

    const setter = (newVal) => {
      if(variable === newVal) return;
      console.log(variable, newVal);
      variable = newVal;
      callback();
    };

    return [variable, setter];
  };

  const useMemo = (fn, refs) => {
    return fn();
  };

  const resetContext = () => {
    
  }

  return { useState, useMemo, resetContext };
}
