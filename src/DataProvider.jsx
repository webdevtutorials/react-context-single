import { DataContext } from "./DataContext";

export function DataProvider({ children }) {
  const value = "My data";

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
