import Logo from "../Logo/Logo";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.css";

export const Header = () => {
  return (
    <header className="site-header">
      <Logo />
      <ThemeToggle />
    </header>
  );
};
