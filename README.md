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
git remote -v
```

## Create context

```js
// src / DataContext.js
import { createContext } from "react";

export const DataContext = createContext();
```

## Create provider and pass the data

```js
// src / DataProvider.jsx
import { DataContext } from "./DataContext";

export function DataProvider({ children }) {
  const value = "My data";

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
```

## Wrap consumers

```js
// src / main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./DataProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>,
);
```

## Use the data in a consumer

```js
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
```

```js
// src / App.jsx
...
import MyComponent from "./MyComponent";
...
<MyComponent />
...
```

## Additional explanation:

- **MyContext.js** is a single returned **OBJECT**. When stored in a variable it becomes a **STABLE REFERENCE**, as opposed to creating a new reference every time by calling a function. As such, it is an **IDENTIFIER** because it refers to one specific object instance.

  ```
  const DataContext = createContext()
  ```

- It contains **DataContext.Provider** and **DataContext.Consumer** properties, which both point to the same object.

- Consumers get access to the shared data once wrapped in a provider like this:

  ```
  <DataContext.Provider />
  ```

  and import **useContext** from 'react' and **DataContext** from the object location.

- The providers gets access to the shared data ones it is passed to the value property
  in the provider like this:

  ```
  const value = "My data"
  <DataContext.Provider value={value} />
  ```

- The wrapped consumer access the dataExample like this:

  ```
  const value = useContext(DataContext)
  ```

  when it or any of it's parents wrapped in a provider.

- To be retrived, the value must be located in the nearest **DataContext.Provider**
  If no provider is found, the default value is returned.

## Quick-start step guide:

1. Create provider-consumer relationship:

   ```
   const DataContext = createContext()
   ```

2. Wrap consumers in a provider:

   ```
   <DataContext.Provider />
   ```

3. Pass the data to the "value" property:

   ```
   const value = "My data"
   <DataContext.Provider value={value} />
   ```

4. Retrieve data with useContext hook:
   ```
   const value = useContext(DataContext)
   ```
