import { useContext } from "react";
import { themeContext } from "./DartkTheme";

const ChildpageV2 = () => {
  const { theme, onThemeChange } = useContext(themeContext);

  return (
    <div>
      <p style={{color :theme}}>V2: {theme}</p>
    </div>
  );
};

export default ChildpageV2;