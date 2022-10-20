import { Link, LinkProps, useLocation } from "react-router-dom";

interface NavLinkProps extends LinkProps {
  activeClassName: string;
  inactiveClassName: string;
}

// Active navlinks function
export default function NavLink({
  to,
  className,
  activeClassName,
  inactiveClassName,
  ...rest
}: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const allClassNames = `${className} ${
    isActive ? activeClassName : inactiveClassName
  }`;
  return <Link className={allClassNames} to={to} {...rest} />;
}
