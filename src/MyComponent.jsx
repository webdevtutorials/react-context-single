import { useContext } from "react";
import { MyContext } from "./MyContext";

export default function MyComponent() {
  const data = useContext(MyContext);

  return (
    <>
      <h2>My Component</h2>
      <p>{data}</p>
    </>
  );
}
