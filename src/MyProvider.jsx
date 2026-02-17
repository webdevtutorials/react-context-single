import { MyContext } from "./MyContext";

export function MyProvider({ children }) {
  const value = "My data";

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
