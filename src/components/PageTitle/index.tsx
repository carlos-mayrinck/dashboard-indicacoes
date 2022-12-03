import { ReactNode } from "react";
import { StyledComponentProps } from "styled-components";
import { Title } from "./styles";

interface PageTitleProps extends StyledComponentProps<"h2", any, {}, never> {
  children: ReactNode;
}

export function PageTitle({ children, ...rest }: PageTitleProps) {
  return (
    <Title {...rest}>{ children }</Title>
  )
}