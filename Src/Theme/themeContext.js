import React, { createContext } from "react";
const themeContext = createContext();
export const ThemeProvider = themeContext.Provider;
export default themeContext;
