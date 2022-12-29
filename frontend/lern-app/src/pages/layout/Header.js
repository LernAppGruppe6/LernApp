import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Header() {
    return (
    <nav className="nav">
        <Link to="/" className="site-title">
            Lern-App
            </Link>
        <ul>
          <CustomLink to="/signin">SignIn</CustomLink>
          <CustomLink to="/learngroup">Learngroup</CustomLink>
          <CustomLink to="/profile">Profile</CustomLink>
          <CustomLink to="/message">Message</CustomLink>
          <CustomLink to="/learngroup">Learngroup</CustomLink>
        </ul>
</nav>
    )
}

function CustomLink({ to, children, ...props }) {

  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
        </Link></li>

  )  
}
