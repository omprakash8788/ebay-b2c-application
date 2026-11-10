
# Client Application — Installation Phase

> **Project Documentation**
>
> Phase: Setup & Installation  
> Module: Frontend Development  
> Stack: React 19, TypeScript, Vite, Redux Toolkit, Tailwind CSS, Three.js

---

# Table of Contents

1. [Introduction](#1-introduction)
2. [Project Configuration](#2-project-configuration)
3. [Understanding Project Metadata](#3-understanding-project-metadata)
4. [Understanding NPM Scripts](#4-understanding-npm-scripts)
5. [Production Dependencies](#5-production-dependencies)
6. [Development Dependencies](#6-development-dependencies)
7. [Install Dependencies](#7-install-dependencies)
8. [Understanding package-lock.json](#8-understanding-package-lockjson)
9. [Verify Installation](#9-verify-installation)
10. [Expected Project Structure](#10-expected-project-structure)
11. [Common Installation Problems](#11-common-installation-problems)
12. [Installation Checklist](#12-installation-checklist)

---

# 1. Introduction

Before starting frontend development, we need to configure the client application and install all the required dependencies.

We are using the following technologies:

| Technology | Purpose |
|---|---|
| React 19 | Building user interfaces |
| TypeScript | Static type checking |
| Vite | Development server and build tool |
| Redux Toolkit | Global state management |
| React Redux | Connecting React with Redux |
| React Router DOM | Application navigation |
| Tailwind CSS | Styling |
| Three.js | 3D graphics |
| React Three Fiber | Using Three.js with React |
| React Three Drei | Reusable 3D helpers |
| React Toastify | Toast notifications |
| React Icons | Icon library |

## What are we trying to achieve?

By the end of this phase:

- The React application should be configured.
- All required dependencies should be installed.
- TypeScript should be configured.
- Vite should run successfully.
- The application should open in the browser.
- The production build should complete successfully.

---

# 2. Project Configuration

## 2.1 What is package.json?

`package.json` is the central configuration file of a Node.js project.

It contains:

1. Project information.
2. Application scripts.
3. Production dependencies.
4. Development dependencies.
5. Package version requirements.

Whenever we install a new npm package, npm updates this file and records the dependency.

## 2.2 Create package.json

**File path:** `client/package.json`

Create or update the file with the following configuration:

```json
{
  "name": "client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@react-three/drei": "^10.7.9",
    "@react-three/fiber": "^9.8.2",
    "@reduxjs/toolkit": "^2.13.0",
    "@tailwindcss/vite": "^4.3.3",
    "react": "^19.3.1",
    "react-dom": "^19.3.1",
    "react-icons": "^5.7.0",
    "react-redux": "^9.3.0",
    "react-router-dom": "^7.18.4",
    "react-toastify": "^11.1.0",
    "tailwindcss": "^4.3.3",
    "three": "^0.186.1"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/node": "^24.19.2",
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "@vitejs/plugin-react": "^6.1.2",
    "eslint": "^10.13.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.7",
    "globals": "^17.13.0",
    "typescript": "~6.0.3",
    "typescript-eslint": "^8.71.2",
    "vite": "^8.3.4"
  }
}
```

---

# 3. Understanding Project Metadata

Let's understand the first four properties.

```json
{
  "name": "client",
  "private": true,
  "version": "0.0.0",
  "type": "module"
}
```

| Property | Explanation |
|---|---|
| name | Defines the npm project name. |
| private | Prevents accidental publishing to npm. |
| version | Defines the current project version. |
| type | Enables ES Module syntax in Node.js configuration files. |

## 3.1 What does type: module mean?

Node.js supports two primary JavaScript module systems:

- CommonJS
- ES Modules (ESM)

### CommonJS

```javascript
const express = require("express");

module.exports = express;
```

### ES Modules

```javascript
import express from "express";

export default express;
```

When we configure:

```json
"type": "module"
```

Node.js interprets `.js` files in this package as ES modules unless another applicable configuration overrides it.

This allows us to use `import` and `export` syntax in JavaScript configuration files.

---

# 4. Understanding NPM Scripts

Scripts are predefined commands that help us execute common development tasks.

Our configuration:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## 4.1 Development Server

**Command:**

```bash
npm run dev
```

**What happens?**

- Starts the Vite development server.
- Runs the application locally.
- Supports Hot Module Replacement (HMR).
- Updates the browser when supported source files change.

The application will generally be available at:

```text
http://localhost:5173/
```

## 4.2 Production Build

**Command:**

```bash
npm run build
```

This command executes:

```bash
tsc -b && vite build
```

It performs two operations.

### First operation: TypeScript build

```bash
tsc -b
```

This executes the TypeScript project build process using the configured TypeScript project references.

It checks and builds the TypeScript projects.

### Second operation: Vite production build

```bash
vite build
```

Creates an optimized production build of the frontend.

### Why do we use &&?

The `&&` operator executes the second command only if the first command succeeds.

Execution flow:

```text
npm run build
      |
      v
   tsc -b
      |
      v
 TypeScript successful?
      |
   +--+--+
   |     |
  Yes    No
   |     |
   v     v
Vite    Stop
Build
   |
   v
Production files
```

## 4.3 Code Linting

**Command:**

```bash
npm run lint
```

ESLint identifies potential problems in our source code.

Examples:

- Unused variables.
- Incorrect React Hook usage.
- Code quality issues.
- Potentially problematic coding patterns.

Linting helps maintain consistent and reliable code.

## 4.4 Production Preview

**Command:**

```bash
npm run preview
```

This starts a local server to preview the production build generated by Vite.

**Important:** Run the production build before starting the preview server.

```bash
npm run build

npm run preview
```

---

# 5. Production Dependencies

## 5.1 What are dependencies?

Dependencies are external libraries required by our application.

They provide functionality that we would otherwise need to implement ourselves.

Our production dependencies are:

```json
"dependencies": {
  "@react-three/drei": "^10.7.9",
  "@react-three/fiber": "^9.8.2",
  "@reduxjs/toolkit": "^2.13.0",
  "@tailwindcss/vite": "^4.3.3",
  "react": "^19.3.1",
  "react-dom": "^19.3.1",
  "react-icons": "^5.7.0",
  "react-redux": "^9.3.0",
  "react-router-dom": "^7.18.4",
  "react-toastify": "^11.1.0",
  "tailwindcss": "^4.3.3",
  "three": "^0.186.1"
}
```

## 5.2 React

**Package:** `react`

React is a JavaScript library for building component-based user interfaces.

Instead of writing the entire application inside one large file, we divide the UI into reusable components.

Example:

```tsx
function App() {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
```

## 5.3 React DOM

**Package:** `react-dom`

React DOM connects React components to the browser DOM.

For example:

```tsx
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <h1>Hello World</h1>
);
```

React handles the component model, while React DOM provides the browser rendering integration.

## 5.4 React Router DOM

**Package:** `react-router-dom`

React Router handles navigation between different application pages.

Example application routes:

```text
/               → Home page
/login          → Login page
/register       → Registration page
/products       → Products page
/products/:id   → Product details
/profile        → User profile
```

This allows us to organize the application into multiple pages.

## 5.5 Redux Toolkit

**Package:** `@reduxjs/toolkit`

Redux Toolkit simplifies Redux state management.

We can use it to manage application-wide data.

Examples:

- Authentication information.
- Shopping cart.
- User information.
- Global application state.

It provides utilities such as:

- configureStore()
- createSlice()
- createAsyncThunk()

## 5.6 React Redux

**Package:** `react-redux`

React Redux connects React components with the Redux store.

It provides hooks such as:

```tsx
useSelector()
useDispatch()
```

Example:

```tsx
import { useSelector, useDispatch } from "react-redux";
```

Redux Toolkit manages the store and reducers, while React Redux connects them to React components.

## 5.7 Tailwind CSS

**Package:** `tailwindcss`

Tailwind CSS is a utility-first CSS framework.

It allows us to style components using predefined utility classes.

Example:

```tsx
function Button() {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      Submit
    </button>
  );
}
```

Instead of creating separate CSS classes for every small styling requirement, we can use Tailwind utility classes.

## 5.8 Tailwind Vite Plugin

**Package:** `@tailwindcss/vite`

This package integrates Tailwind CSS with the Vite build system.

It provides the Vite integration needed for our Tailwind CSS setup.

## 5.9 React Icons

**Package:** `react-icons`

Provides reusable icon components.

Example:

```tsx
import { FaUser } from "react-icons/fa";

function Profile() {
  return (
    <div>
      <FaUser />
      <span>Profile</span>
    </div>
  );
}
```

## 5.10 React Toastify

**Package:** `react-toastify`

Used to display toast notifications.

Examples:

- Login successful.
- Product added to cart.
- Something went wrong.
- Data saved successfully.

## 5.11 Three.js

**Package:** `three`

Three.js is a JavaScript library for creating and rendering 3D graphics in the browser.

It provides functionality for:

- 3D objects.
- Materials.
- Lighting.
- Cameras.
- Animations.
- 3D scenes.

## 5.12 React Three Fiber

**Package:** `@react-three/fiber`

React Three Fiber provides a React-based interface for creating Three.js scenes.

Instead of manually constructing everything with Three.js imperative APIs, we can describe scenes using React components.

Example:

```tsx
import { Canvas } from "@react-three/fiber";

function Scene() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
}

export default Scene;
```

## 5.13 React Three Drei

**Package:** `@react-three/drei`

Drei provides reusable helpers and abstractions for React Three Fiber.

It makes common 3D development tasks easier.

Examples include:

- Camera controls.
- Lighting helpers.
- 3D text.
- Environment maps.
- Model loading.

### Relationship between Three.js, Fiber and Drei

```text
          Three.js
             |
             v
    React Three Fiber
             |
             v
       React Three Drei
```

Three.js provides the 3D engine.

React Three Fiber provides the React integration.

Drei provides reusable helpers.

---

# 6. Development Dependencies

## 6.1 What are devDependencies?

Development dependencies are packages primarily required during development, linting, testing, and building.

They are generally not required as runtime dependencies in the deployed frontend.

Our development dependencies:

```json
"devDependencies": {
  "@eslint/js": "^10.0.1",
  "@types/node": "^24.19.2",
  "@types/react": "^19.3.0",
  "@types/react-dom": "^19.3.0",
  "@vitejs/plugin-react": "^6.1.2",
  "eslint": "^10.13.0",
  "eslint-plugin-react-hooks": "^7.1.1",
  "eslint-plugin-react-refresh": "^0.5.7",
  "globals": "^17.13.0",
  "typescript": "~6.0.3",
  "typescript-eslint": "^8.71.2",
  "vite": "^8.3.4"
}
```

## 6.2 TypeScript

**Package:** `typescript`

TypeScript extends JavaScript with static typing.

Example:

```typescript
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));
```

TypeScript helps identify type-related errors before runtime.

## 6.3 React Type Definitions

**Packages:**

```text
@types/react
@types/react-dom
```

These packages provide TypeScript definitions for React and React DOM.

They help TypeScript understand:

- React components.
- Props.
- Hooks.
- Events.
- DOM-related types.

Example:

```tsx
interface ButtonProps {
  title: string;
  disabled?: boolean;
}

function Button({ title, disabled }: ButtonProps) {
  return (
    <button disabled={disabled}>
      {title}
    </button>
  );
}
```

## 6.4 Node Type Definitions

**Package:** `@types/node`

Provides TypeScript definitions for Node.js APIs.

For example:

```typescript
import path from "node:path";
```

These definitions help TypeScript understand Node.js modules and their types.

## 6.5 Vite

**Package:** `vite`

Vite is our frontend development server and production build tool.

It provides:

- Fast development startup.
- Hot Module Replacement.
- TypeScript and JSX transformation through the configured toolchain.
- Production bundling.
- Asset optimization.

## 6.6 Vite React Plugin

**Package:** `@vitejs/plugin-react`

Provides React support in Vite.

It enables React-related transformations and Fast Refresh functionality.

## 6.7 ESLint

**Package:** `eslint`

ESLint analyzes JavaScript and TypeScript source code for potential problems.

## 6.8 ESLint JavaScript Configuration

**Package:** `@eslint/js`

Provides recommended JavaScript linting configurations for ESLint.

## 6.9 ESLint React Hooks Plugin

**Package:** `eslint-plugin-react-hooks`

Checks React Hook rules.

Examples:

- Rules of Hooks.
- Dependency array problems.
- Potential React Hook mistakes.

## 6.10 ESLint React Refresh Plugin

**Package:** `eslint-plugin-react-refresh`

Helps identify issues related to React Fast Refresh compatibility.

## 6.11 Globals

**Package:** `globals`

Provides predefined global variable definitions for different JavaScript environments.

Examples:

- Browser globals.
- Node.js globals.

## 6.12 TypeScript ESLint

**Package:** `typescript-eslint`

Provides TypeScript integration with ESLint.

It allows ESLint to understand TypeScript syntax and apply TypeScript-aware linting rules.

---

# 7. Install Dependencies

Now that we understand the configuration, let's install everything.

## 7.1 Navigate to the client directory

**Terminal location:** Project root

```bash
cd client
```

Make sure the terminal is inside the directory containing `package.json`.

## 7.2 Install packages

**Command:**

```bash
npm install
```

### What happens internally?

1. npm reads package.json.
2. npm resolves the required package versions.
3. npm downloads the packages.
4. npm installs them inside node_modules.
5. npm generates or updates package-lock.json.

## 7.3 What is node_modules?

`node_modules` is the directory where npm stores installed packages.

For example:

```text
node_modules/
├── react/
├── react-dom/
├── vite/
├── typescript/
├── redux/
└── ...
```

Do not manually modify installed package files.

If a dependency becomes corrupted, reinstall it using npm.

---

# 8. Understanding package-lock.json

When we execute:

```bash
npm install
```

npm generates or updates:

```text
package-lock.json
```

## 8.1 What is package-lock.json?

`package-lock.json` records the exact resolved dependency versions and their dependency tree.

Consider this:

```json
{
  "dependencies": {
    "react": "^19.3.1"
  }
}
```

The `^` symbol allows npm to resolve compatible newer minor and patch versions within the specified major version range.

The lockfile records the exact version selected during installation.

## 8.2 Why is package-lock.json important?

Imagine two developers working on the same project.

Developer A installs dependencies today.

Developer B installs dependencies several weeks later.

Without a lockfile, their resolved dependency trees might differ.

With package-lock.json, npm can reproduce the same resolved dependency tree more consistently.

### Important rules

- Commit package-lock.json to Git.
- Do not commit node_modules.
- Do not manually modify package-lock.json unless you understand the consequences.
- Use npm ci for clean and reproducible installations.

## 8.3 Difference between npm install and npm ci

| npm install | npm ci |
|---|---|
| Installs dependencies. | Performs a clean installation. |
| Can update package-lock.json. | Uses the existing lockfile. |
| Can install new dependencies. | Requires dependencies to match the lockfile. |
| Useful during development. | Useful in CI/CD and clean environments. |

Example:

```bash
npm install
```

For a clean installation:

```bash
npm ci
```

---

# 9. Verify Installation

After installation, execute the following commands.

## 9.1 Check Node.js version

```bash
node -v
```

## 9.2 Check npm version

```bash
npm -v
```

## 9.3 Check installed dependencies

```bash
npm list --depth=0
```

This displays the directly installed packages and their versions.

## 9.4 Start the development server

```bash
npm run dev
```

Expected output will look similar to:

```text
VITE ready

Local: http://localhost:5173/
```

Open the URL in your browser.

## 9.5 Run ESLint

```bash
npm run lint
```

This checks the project using the configured ESLint rules.

## 9.6 Generate production build

```bash
npm run build
```

If successful, Vite generates the production files inside:

```text
client/dist/
```

## 9.7 Preview production build

```bash
npm run preview
```

Open the URL displayed in your terminal.

---

# 10. Expected Project Structure

After installation, the initial project structure should look similar to this:

```text
client/
│
├── node_modules/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

Some files may differ depending on the initial Vite template.

---

# 11. Common Installation Problems

## 11.1 Node.js command not recognized

**Error:**

```text
'node' is not recognized as an internal or external command
```

**Possible reason:**

Node.js is not installed or its executable directory is missing from PATH.

**Solution:**

1. Install Node.js.
2. Restart the terminal.
3. Verify installation.

```bash
node -v
npm -v
```

## 11.2 npm install fails

**Possible reasons:**

- Network connectivity problems.
- Incorrect package versions.
- npm registry problems.
- Dependency conflicts.

**Initial troubleshooting:**

```bash
npm cache verify
```

Then retry:

```bash
npm install
```

If the lockfile and package configuration are valid, you can also try:

```bash
npm ci
```

Do not delete package-lock.json as the first troubleshooting step.

## 11.3 Port already in use

**Possible error:**

```text
Port 5173 is already in use
```

Vite may automatically select another available port.

Alternatively, stop the process using the existing port and restart the application.

## 11.4 TypeScript build failure

**Command:**

```bash
npm run build
```

If TypeScript reports errors, inspect the error message and the relevant file.

Remember:

```bash
tsc -b && vite build
```

Vite production bundling will not execute if the TypeScript build fails.

---

# 12. Installation Checklist

Before moving to the next development phase, verify everything.

## Configuration

- [ ] package.json configured.
- [ ] Project metadata understood.
- [ ] npm scripts understood.
- [ ] Production dependencies understood.
- [ ] Development dependencies understood.

## Installation

- [ ] Node.js installed.
- [ ] npm available.
- [ ] npm install completed.
- [ ] node_modules generated.
- [ ] package-lock.json generated.

## Verification

- [ ] npm list --depth=0 executed.
- [ ] npm run dev executed successfully.
- [ ] Application opened in the browser.
- [ ] npm run lint executed.
- [ ] npm run build completed successfully.
- [ ] npm run preview tested.

---

# Installation Phase — Completed

At this point, our frontend development environment is installed and ready for further configuration.

## What we have established

| Component | Status |
|---|---|
| React | Installed |
| React DOM | Installed |
| TypeScript | Installed |
| Vite | Installed |
| Redux Toolkit | Installed |
| React Redux | Installed |
| React Router DOM | Installed |
| Tailwind CSS | Installed |
| Three.js | Installed |
| React Three Fiber | Installed |
| React Three Drei | Installed |
| ESLint | Installed |

---

# Next Development Phase

## Frontend Foundation & Architecture

In the next phase, we will configure:

1. Tailwind CSS integration.
2. React application entry point.
3. Redux store configuration.
4. React Router configuration.
5. Toast notification setup.
6. Global CSS.
7. Application folder structure.
8. Reusable components.
9. Layout architecture.

**Development principle:**

Don't just install packages and start coding.

Understand what each dependency does, why the project needs it, and which part of the application will use it.

This makes debugging, maintenance, and future architectural decisions much easier.


### Follow Tailwind docs for setup 
### Clear all existing default code 


---

### Design architecture 

## 10. Expected Client Project Structure

Our frontend application follows a modular folder structure. We separate application configuration, reusable components, features, pages, and static assets to make the project easier to maintain and scale.

### 10.1 Directory Structure

```text
client/
│
├── node_modules/          # Installed npm dependencies
│
├── public/                # Static public assets
│
├── src/
│   │
│   ├── app/               # Application-level configuration
│   │
│   ├── assets/            # Images, fonts, icons and other assets
│   │
│   ├── components/        # Reusable UI components
│   │
│   ├── features/          # Feature-specific modules and logic
│   │
│   ├── pages/             # Application pages / route components
│   │
│   ├── App.tsx            # Root application component
│   │
│   ├── index.css          # Global styles
│   │
│   └── main.tsx           # Application entry point
│
├── .gitignore             # Files and folders excluded from Git
│
├── eslint.config.js       # ESLint configuration
│
├── index.html             # Main HTML entry point
│
├── package.json           # Project configuration and dependencies
│
└── package-lock.json      # Exact dependency lock information
```

### 10.2 Understanding Each Folder

| Folder / File | Responsibility |
|---|---|
| `node_modules/` | Stores installed npm packages. |
| `public/` | Stores static files served directly. |
| `src/app/` | Contains application-level configuration, such as Redux store and routing. |
| `src/assets/` | Stores images, fonts, icons and other static assets used by components. |
| `src/components/` | Contains reusable UI components such as buttons, modals and navigation bars. |
| `src/features/` | Contains feature-specific logic, state management and related components. |
| `src/pages/` | Contains page-level components such as Home, Login and Dashboard. |
| `App.tsx` | Root React component that connects the application UI. |
| `index.css` | Global CSS and application-wide styling. |
| `main.tsx` | Entry point that mounts the React application into the DOM. |
| `.gitignore` | Defines files and directories Git should ignore. |
| `eslint.config.js` | Configures ESLint rules. |
| `index.html` | HTML document used by Vite. |
| `package.json` | Defines project scripts and dependencies. |
| `package-lock.json` | Locks resolved npm dependency versions. |

### 10.3 Understanding the Application Architecture

We organize the frontend using a combination of feature-based and component-based architecture.

**1. app/**

Responsible for application-wide configuration.

Examples:
- Redux store
- Router configuration
- Global providers

**2. assets/**

Stores static resources.

Examples:
- Product images
- Logos
- Fonts
- Icons

**3. components/**

Contains reusable UI components shared across multiple pages or features.

Examples:
- Button
- Modal
- Navbar
- Footer
- Loader

**4. features/**

Contains business functionality grouped by feature.

Examples:
- Authentication
- Products
- Cart
- User management

**5. pages/**

Contains complete page-level components that are connected to application routes.

Examples:
- HomePage
- LoginPage
- RegisterPage
- ProductPage

### 10.4 Important Architectural Principle

Avoid placing the entire application inside `App.tsx`.

Instead:

- Keep application configuration inside `app/`.
- Keep reusable UI inside `components/`.
- Keep feature-specific logic inside `features/`.
- Keep route-level pages inside `pages/`.
- Keep static resources inside `assets/`.

This separation improves maintainability, code reuse, readability and scalability as the application grows.

**Note:** The folder responsibilities above define the intended architecture. We will introduce their internal files progressively during the development phase.


### Note `create all pages and components as per intially need.`

### Setup react router - Open `main.tsx `file 

```
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </StrictMode>,
);


```

After that open App.tsx and add routes dor reach components

```
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home"; 
import Collection from "./pages/Collection"; 
import About from "./pages/About"; 
import Contact from "./pages/Contact"; 
import Product from "./pages/Product"; 
import Cart from "./pages/Cart"; 
import Login from "./pages/Login"; 
import PlaceOrder from "./pages/PlaceOrder"; 
import Orders from "./pages/Orders"; 
const App = () => { 
  return ( 
    <> 
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]"> 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/collection" element={<Collection />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/product/:productId" element={<Product />} /> 
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/place-order" element={<PlaceOrder />} /> 
          <Route path="/orders" element={<Orders />} /> 
        </Routes> 
      </div> 
    </> 
  ); 
}; 
 
export default App;
```

`We have setup the routes`

---

Next--> We will start building the UI

Conclusion - Project setup part is done.

