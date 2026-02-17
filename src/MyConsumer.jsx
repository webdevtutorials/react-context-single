import { useContext } from "react";
import { MyContext } from "./MyContext";

export default function MyConsumer() {
  const data = useContext(MyContext);

  return (
    <>
      <h2>My Consumer</h2>
      <p>{data}</p>
    </>
  );
}
