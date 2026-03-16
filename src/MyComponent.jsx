import { useContext } from "react";
import { DataContext } from "./DataContext";

export default function MyComponent() {
  const data = useContext(DataContext);

  return (
    <>
      <h2>My Component</h2>
      <p>{data}</p>
    </>
  );
}
