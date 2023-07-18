import { useState } from "react";
import { useInterval } from "./useInterval";

export const useIncrementCountByOne = (duration: number) => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount((v) => v + 1);
  useInterval(increment, duration);

  return { count };
};
