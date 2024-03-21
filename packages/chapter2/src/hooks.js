
export function createHooks(callback) {
  const store = [];
  let cursor = 0;

  const useState = (initState) => {
    const index = cursor;
    
    const setter = (newVal) => {
      if(store[index].variable === newVal) return;
      console.log(store);
      store[index].variable = newVal;
      callback();
    };

    store.length === index &&
      store.push({ variable: initState, setter });
    
    cursor++;
    
    return [store[index].variable, store[index].setter];
  };

  const useMemo = (fn, refs) => {
    

    return fn();
  };

  const resetContext = () => {
    cursor = 0;
  }

  return { useState, useMemo, resetContext };
}
