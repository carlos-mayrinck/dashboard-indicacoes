import { ReactNode } from "react";

import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

import { Container, ContentContainer } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Sidebar />
      <Header />
      <ContentContainer>
        {children}
      </ContentContainer>
    </Container>
  )
}