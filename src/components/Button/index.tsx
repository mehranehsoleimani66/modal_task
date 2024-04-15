

import { FC, ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface propButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<propButton> = (props) => {
  return <ButtonContainer {...props}/>
};
