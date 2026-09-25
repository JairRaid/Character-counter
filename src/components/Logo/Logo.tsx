import { useTheme } from "../../hooks/useTheme";
import "./Logo.css";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <a
      href="/"
      className="site-header__brand"
      aria-label="Character Counter home"
    >
      {theme === "dark" ? (
        <img
          src="images/logo-dark-theme.svg"
          alt="Logo"
          className="site-header__logo"
        />
      ) : (
        <img
          src="images/logo-light-theme.svg"
          alt="Logo"
          className="site-header__logo"
        />
      )}
    </a>
  );
};

export default Logo;
