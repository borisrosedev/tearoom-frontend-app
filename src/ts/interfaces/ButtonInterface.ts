interface ButtonInterface {
  id: string;
  content: string;
  type?: "submit" | "reset" | "button";
  classNames?: string;
}

export default ButtonInterface;
