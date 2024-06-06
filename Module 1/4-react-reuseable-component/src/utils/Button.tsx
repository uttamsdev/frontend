import cn from "./cn";
const Button = ({ variant, className, ...rest }) => {
  const getVariant = (variant) => {
    switch (variant) {
      case "solid":
        return "btn-solid";
      case "primary":
        return "btn-primary";
    }
  };
  return <button {...rest} className={cn(getVariant(variant), className)}>Click</button>;
};

export default Button;
