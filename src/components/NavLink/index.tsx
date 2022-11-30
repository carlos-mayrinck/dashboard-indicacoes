import { ReactNode } from "react";
import { Link, LinkProps, useLocation } from "react-router-dom";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  shouldMatchExactHref?: boolean;
}

export function NavLink({ children, shouldMatchExactHref = false, ...rest }: NavLinkProps) {
  
  const { pathname } = useLocation();

  let isActive = false;
  
  if(pathname === rest.to) {
    isActive = true;
  } else if(pathname.startsWith(String(rest.to)) && !shouldMatchExactHref) {
    isActive = true;
  }

  return (
    <Link
    {...rest}
    className={isActive ? "active" : ""}
    >
      { children }
    </Link>
  );
}