import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={changeTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="theme-toggle inline-flex size-32 p-[.375rem] rounded-6 bg-n100-to-n700 md:size-[2.75rem] md:rounded-8 md:p-[.6875rem]"
    >
      {theme === "dark" ? (
        <img src="images/icon-sun.svg" alt="" />
      ) : (
        <img src="images/icon-moon.svg" alt="" />
      )}
    </button>
  );
};

export default ThemeToggle;
