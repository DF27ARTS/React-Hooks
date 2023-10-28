/* ---------------- ThemeProvider ---------------- */
import { createContext, useState, useContext, Component } from "react";

const ThemeContext = createContext(null);
const ThemeUpdateContext = createContext(null);

const useTheme = () => {
  return useContext(ThemeContext);
};
const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
/* ---------------- ThemeProvider ---------------- */

/* ---------------- HookUseContext ---------------- */
const HookUseContext = () => {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
      <ClassContextComponent />
    </ThemeProvider>
  );
};
export default HookUseContext;
/* ---------------- HookUseContext ---------------- */

/* ---------------- ClassContextComponent ---------------- */
class ClassContextComponent extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "#333" : "#ccc",
      color: dark ? "#ccc" : "#333",
      padding: "4rem",
      margin: "2rem",
      borderRadius: ".5rem",
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>Class Theme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
/* ---------------- ClassContextComponent ---------------- */

/* ---------------- FunctionContextComponent ---------------- */
function FunctionContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "4rem",
    margin: "2rem",
    borderRadius: ".5rem",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
}
/* ---------------- FunctionContextComponent ---------------- */
