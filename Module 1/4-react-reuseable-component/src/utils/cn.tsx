import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";
const cn = (...inputs: ClassValue[]) => {
  //...inputs is a params being spread.
  return twMerge(clsx(inputs));
};

export default cn;
