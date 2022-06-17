function NavbarItem({ className, linkContent, execution }) {
  return (
    <li className={`nav-item ${className}`}>
      <a href={`#${className}`} className="nav-link" onClick={execution}>
        {linkContent}
      </a>
    </li>
  );
}

export default NavbarItem;
