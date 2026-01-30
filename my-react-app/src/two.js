const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  const theme = useContext(ThemeContext);
  return <p>Theme: {theme}</p>;
}
function Two() {
  return <h2>This is the second component.</h2>;
}

export default Two;

import { createContext, useContext } from "react";





