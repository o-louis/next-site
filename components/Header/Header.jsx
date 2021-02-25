const Header = ({ title, ...props }) => (
  <header {...props}>
    <h1>{title}</h1>
  </header>
);

export default Header;
