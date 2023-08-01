import { useContext } from "react";
import { themeContext } from "./DartkTheme";

const Childpage = () => {
  const { theme, onThemeChange } = useContext(themeContext);

  return (
    <div>
      <p>V1: {theme}</p>
      <button onClick={onThemeChange}>Change theme from Childpage</button>
    </div>
  );
};

export default Childpage;