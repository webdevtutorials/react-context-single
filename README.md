# React Context for Stateless dataExample.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

A quick-start guide to scaffolding a React-Vite project and implementing a basic React Context provider-consumer relationship.

---

## To run the app:

```bash
cd react-context-single
yarn install
yarn dev
```

## To build from scratch start a new Vite-React project:

```bash
cd tutorials

yarn create vite react-context-single --template react
cd react-context-single
```

## Initiate version control:

```bash
git init
git add .
git commit -m "Empty React-Vite app"
git branch -m master main
```

## Upload to GitHub:

```bash
gh auth status
gh repo create react-context-stateless --public --source=. --remote=origin --push
```

## Create context

```js
// src / MyContext.js
import { createContext } from "react";

export const MyContext = createContext();
```

## Create provider and pass the data

```js
// src / MyProvider.jsx
import { MyContext } from "./MyContext";

export function MyProvider({ children }) {
  const value = "My data";

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
```

## Wrap consumers

```js
// src / main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyProvider } from "./MyProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </StrictMode>,
);
```

## Use the data in a consumer

```js
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
```

```js
// src / App.jsx
...
import MyConsumer from "./MyConsumer";
...
<MyConsumer />
...
```

## Additional explanation:

- **MyContext.js** is a single returned **OBJECT**. When stored in a variable it becomes a **STABLE REFERENCE**, as opposed to creating a new reference every time by calling a function. As such, it is an **IDENTIFIER** because it refers to one specific object instance.

  ```
  const MyContext = createContext()
  ```

- It contains **MyContext.Provider** and **MyContext.Consumer** properties, which both point to the same object.

- Consumers get access to the shared data once wrapped in a provider like this:

  ```
  <MyContext.Provider />
  ```

  and import **useContext** from 'react' and **MyContext** from the object location.

- The providers gets access to the shared data ones it is passed to the value property
  in the provider like this:

  ```
  const value = "My data"
  <MyContext.Provider value={value} />
  ```

- The wrapped consumer access the dataExample like this:

  ```
  const value = useContext(MyContext)
  ```

  when it or any of it's parents wrapped in a provider.

- To be retrived, the value must be located in the nearest **MyContext.Provider**
  If no provider is found, the default value is returned.

## Quick-start step guide:

1. Create provider-consumer relationship:

   ```
   const MyContext = createContext()
   ```

2. Wrap consumers in a provider:

   ```
   <MyContext.Provider />
   ```

3. Pass the dataExample to the "value" property:

   ```
   const value = "My data"
   <MyContext.Provider value={value} />
   ```

4. Retrieve dataExample with useContext hook:
   ```
   const value = useContext(MyContext)
   ```
