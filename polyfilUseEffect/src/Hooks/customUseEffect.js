import React from "react";
import { useRef } from "react";

const customUseEffect = (effect, deps) => {
  const firstRender = useRef(true);
  const prevDeps = useRef([]); // state or refs should be used to keep track of values across renders.

  if (firstRender.current) {
    firstRender.current = false;
    console.log("render first time");
    effect();
    prevDeps.current = deps;
    return;
  } else {
    const changedDeps = deps.some(
      (dep, index) => dep !== prevDeps.current[index]
    );
    if (changedDeps) {
      effect();
      prevDeps.current = deps;
    }
  }
};

export default customUseEffect;
