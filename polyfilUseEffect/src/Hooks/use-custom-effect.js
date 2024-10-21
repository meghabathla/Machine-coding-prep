import { useRef } from "react";

const useCustomEffect = (effect, deps) => {
  //fisrt mount

  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);

  if (isFirstRender.current) {
    isFirstRender.current = false;
    console.log(isFirstRender.current);
    effect();
    return;
  }

  // have given deps and no deps
  else {
    const depsChanged = deps
      ? JSON.stringify(deps) !== JSON.stringify(prevDeps)
      : true;

    if (depsChanged) {
      effect();
    }
  }

  prevDeps.current = deps || [];

  //cleanup function
};

export default useCustomEffect;
